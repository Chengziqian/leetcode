// 01/21/2021 HARD

// https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/

/*
Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1,
and an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge 
between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.

Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST). 
An MST edge whose deletion from the graph would cause the MST weight to increase is called a critical edge. 
On the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.

Note that you can return the indices of the edges in any order.


Example 1:


Input: n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
Output: [[0,1],[2,3,4,5]]
Explanation: The figure above describes the graph.
The following figure shows all the possible MSTs:

Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return them in the first list of the output.
The edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are considered pseudo-critical edges. We add them to the second list of the output.
Example 2:



Input: n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
Output: [[],[0,1,2,3]]
Explanation: We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.
 

Constraints:

2 <= n <= 100
1 <= edges.length <= min(200, n * (n - 1) / 2)
edges[i].length == 3
0 <= ai < bi < n
1 <= weighti <= 1000
All pairs (ai, bi) are distinct.

 */

import { UnionFind } from '../../utils/UnionFind';

function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  const uf = new UnionFind(n);
  const index: number[] = new Array(edges.length);
  for (let i = 0; i < edges.length; i++) index[i] = i;
  index.sort((a, b) => edges[a][2] - edges[b][2]);
  let value = 0;
  for (let i = 0; i < index.length; i++) {
    const [u, v, w] = edges[index[i]];
    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      value += w;
    }
  }
  const criticalEdges: number[] = [];
  const noCriticalEdges: number[] = [];
  for (let i = 0; i < index.length; i++) {
    let _value = 0;
    const _uf = new UnionFind(n);
    for (let j = 0; j < index.length; j++) {
      if (i !== j) {
        const [u, v, w] = edges[index[j]];
        if (_uf.find(u) !== _uf.find(v)) {
          _uf.union(u, v);
          _value += w;
        }
      }
    }
    if ((_uf.cc === 1 && _value > value) || _uf.cc !== 1) {
      criticalEdges.push(index[i]);
      continue;
    }
    const __uf = new UnionFind(n);
    __uf.union(edges[index[i]][0], edges[index[i]][1]);
    let __value = edges[index[i]][2];
    for (let j = 0; j < index.length; j++) {
      if (i !== j) {
        const [u, v, w] = edges[index[j]];
        if (__uf.find(u) !== __uf.find(v)) {
          __uf.union(u, v);
          __value += w;
        }
      }
    }
    if (__value === value) noCriticalEdges.push(index[i]);
  }
  return [criticalEdges, noCriticalEdges];
};
