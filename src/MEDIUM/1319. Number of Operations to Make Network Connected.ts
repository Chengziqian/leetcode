// 12/03/2020 MEDIUM

// https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/

/*
There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. 
Any computer can reach any other computer directly or indirectly through the network.

Given an initial computer network connections. 
You can extract certain cables between two directly connected computers, 
and place them between any pair of disconnected computers to make them directly connected. 
Return the minimum number of times you need to do this in order to make all the computers connected. 
If it's not possible, return -1.

 

Example 1:



Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
Example 2:



Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2
Example 3:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.
Example 4:

Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
Output: 0
 

Constraints:

1 <= n <= 10^5
1 <= connections.length <= min(n*(n-1)/2, 10^5)
connections[i].length == 2
0 <= connections[i][0], connections[i][1] < n
connections[i][0] != connections[i][1]
There are no repeated connections.
No two computers are connected by more than one cable.

 */

// function makeConnected(n: number, connections: number[][]): number {
//   if (connections.length < n - 1) return -1;
//   const edges: number[][] = [];
//   const visited: boolean[] = new Array(n).fill(false);
//   for (let i = 0; i < n; i++) {
//     edges.push([]);
//   }
//   for (let i = 0; i < connections.length; i++) {
//     edges[connections[i][0]].push(connections[i][1]);
//     edges[connections[i][1]].push(connections[i][0]);
//   }
//   let part = 0;
//   for (let i = 0; i < edges.length; i++) {
//     if (!visited[i]) {
//       part++;
//       dfs(i);
//     }
//   }
//   return part - 1;
//  
//   function dfs(index: number) {
//     visited[index] = true;
//     for (let i = 0; i < edges[index].length; i++) {
//       if (!visited[edges[index][i]]) {
//         dfs(edges[index][i]);
//       }
//     }
//   }
// };

function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) return -1;
  const parent: number[] = new Array(n);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }
  let part = n;
  for (let i = 0; i < connections.length; i++) {
    const p1 = find(connections[i][0]);
    const p2 = find(connections[i][1]);
    if (p1 !== p2) {
      parent[p1] = p2;
      part--;
    }
  }
  return part - 1;
  
  function find(x: number): number {
    return x === parent[x] ? x : parent[x] = find(parent[x]);
  }
};
