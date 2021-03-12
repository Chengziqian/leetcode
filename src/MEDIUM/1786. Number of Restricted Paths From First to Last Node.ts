// 03/08/2021 MEDIUM

// https://leetcode-cn.com/problems/number-of-restricted-paths-from-first-to-last-node/

/*
There is an undirected weighted connected graph. You are given a positive integer n which denotes that the graph has n nodes labeled from 1 to n, and an array edges where each edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with weight equal to weighti.

A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1.

The distance of a path is the sum of the weights on the edges of the path. Let distanceToLastNode(x) denote the shortest distance of a path between node n and node x. A restricted path is a path that also satisfies that distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1.

Return the number of restricted paths from node 1 to node n. Since that number may be too large, return it modulo 109 + 7.

 

Example 1:


Input: n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
Output: 3
Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The three restricted paths are:
1) 1 --> 2 --> 5
2) 1 --> 2 --> 3 --> 5
3) 1 --> 3 --> 5
Example 2:


Input: n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]
Output: 1
Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The only restricted path is 1 --> 3 --> 7.
 

Constraints:

1 <= n <= 2 * 104
n - 1 <= edges.length <= 4 * 104
edges[i].length == 3
1 <= ui, vi <= n
ui != vi
1 <= weighti <= 105
There is at most one edge between any two nodes.
There is at least one path between any two nodes.

 */
import { PriorityQueue } from '../../utils/PriorityQueue';

// function countRestrictedPaths(n: number, edges: number[][]): number {
//   const adjList: number[][][] = new Array(n + 1);
//   for (let i = 0; i < adjList.length; i++) {
//     adjList[i] = [];
//   }
//   for (let i = 0; i < edges.length; i++) {
//     const [u, v, w] = edges[i];
//     adjList[u].push([v, w]);
//     adjList[v].push([u, w]);
//   }
//   const vis: boolean[] = new Array(n + 1).fill(false);
//   const dis: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
//   const queue: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[1] < b[1]);
//   queue.add([n, 0]);
//   dis[n] = 0;
//   while (!queue.empty()) {
//     const [u, w] = queue.remove();
//     if (vis[u]) continue;
//     vis[u] = true;
//     for (let i = 0; i < adjList[u].length; i++) {
//       const [v, ww] = adjList[u][i];
//       if (dis[v] > w + ww) {
//         dis[v] = w + ww;
//         queue.add([v, dis[v]]);
//       }
//     }
//   }
//   const nid: number[] = new Array(n + 1);
//   for (let i = 0; i < nid.length; i++) {
//     nid[i] = i;
//   }
//   nid.sort((a, b) => dis[a] - dis[b]);
//   const dp: number[] = new Array(n + 1).fill(0);
//   const MOD = 1e9 + 7;
//   dp[n] = 1;
//   for (let i = 0; i <= n; i++) {
//     const index = nid[i];
//     for (let k = 0; k < adjList[index].length; k++) {
//       const nextIndex = adjList[index][k][0];
//       if (dis[index] > dis[nextIndex]) {
//         dp[index] += dp[nextIndex] % MOD;
//       }
//     }
//     if (index === 1) break;
//   }
//   return dp[1] % MOD;
// };

function countRestrictedPaths(n: number, edges: number[][]): number {
  const adjList: number[][][] = new Array(n + 1);
  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i];
    adjList[u].push([v, w]);
    adjList[v].push([u, w]);
  }
  const vis: boolean[] = new Array(n + 1).fill(false);
  const dis: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const queue: PriorityQueue<number[]> = new PriorityQueue<number[]>((a, b) => a[1] < b[1]);
  queue.add([n, 0]);
  dis[n] = 0;
  while (!queue.empty()) {
    const [u, w] = queue.remove();
    if (vis[u]) continue;
    vis[u] = true;
    for (let i = 0; i < adjList[u].length; i++) {
      const [v, ww] = adjList[u][i];
      if (dis[v] > w + ww) {
        dis[v] = w + ww;
        queue.add([v, dis[v]]);
      }
    }
  }
  const MOD = 1e9 + 7;
  const inDegree: number[] = new Array(n + 1).fill(0);
  const newAdjList: number[][] = new Array(n + 1);
  for (let i = 0; i < adjList.length; i++) {
    newAdjList[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    if (dis[u] > dis[v]) {
      newAdjList[u].push(v);
      inDegree[v]++;
    } else if (dis[v] > dis[u]) {
      newAdjList[v].push(u);
      inDegree[u]++;
    }
  }
  const q: number[] = [];
  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i < inDegree.length; i++) {
    if (inDegree[i] === 0) q.push(i);
  }
  dp[1] = 1;
  while (q.length) {
    const current = q.pop();
    for (let i = 0; i < newAdjList[current].length; i++) {
      const index = newAdjList[current][i];
      if (--inDegree[index] === 0) q.push(index);
      dp[index] += dp[current] % MOD;
    }
  }
  return dp[n] % MOD;
};
