// 04/02/2021 MEDIUM

// https://leetcode-cn.com/problems/route-between-nodes-lcci/

/*
Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
Example1:

 Input: n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
 Output: true
Example2:

 Input: n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
 Output true
Note:

0 <= n <= 100000
All node numbers are within the range [0, n].
There might be self cycles and duplicated edges.

 */

function findWhetherExistsPath(n: number, graph: number[][], start: number, target: number): boolean {
  const adjList: Set<number>[] = new Array(n);
  for (let i = 0; i < adjList.length; i++) {
    adjList[i] = new Set<number>();
  }
  const visited: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < graph.length; i++) {
    const [u, v] = graph[i];
    adjList[u].add(v);
  }
  return dfs(start);
  
  function dfs(index: number) {
    if (index === target) return true;
    visited[index] = true;
    for (let v of adjList[index]) {
      if (visited[v]) continue;
      if (dfs(v)) return true;
    }
    visited[index] = false;
    return false;
  }
};
