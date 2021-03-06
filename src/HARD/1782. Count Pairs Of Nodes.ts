// 03/08/2021 HARD

// https://leetcode-cn.com/problems/count-pairs-of-nodes/

/*
You are given an undirected graph represented by an integer n, 
which is the number of nodes, and edges, where edges[i] = [ui, vi] 
which indicates that there is an undirected edge between ui and vi. You are also given an integer array queries.

The answer to the jth query is the number of pairs of nodes (a, b) that satisfy the following conditions:

a < b
cnt is strictly greater than queries[j], where cnt is the number of edges incident to a or b.
Return an array answers such that answers.length == queries.length and answers[j] is the answer of the jth query.

Note that there can be repeated edges.

 

Example 1:


Input: n = 4, edges = [[1,2],[2,4],[1,3],[2,3],[2,1]], queries = [2,3]
Output: [6,5]
Explanation: The number of edges incident to at least one of each pair is shown above.
Example 2:

Input: n = 5, edges = [[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]], queries = [1,2,3,4,5]
Output: [10,10,9,8,6]
 

Constraints:

2 <= n <= 2 * 104
1 <= edges.length <= 105
1 <= ui, vi <= n
ui != vi
1 <= queries.length <= 20
0 <= queries[j] < edges.length
 */

function countPairs(n: number, edges: number[][], queries: number[]): number[] {
  const degree: number[] = new Array(n + 1).fill(0);
  const commonEdge: Map<number, number> = new Map<number, number>();
  const distinctEdges: number[][] = [];
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    degree[u]++;
    degree[v]++;
    const key = getKey(u, v);
    if (!commonEdge.has(key)) distinctEdges.push(edges[i]);
    commonEdge.set(key, commonEdge.has(key) ? commonEdge.get(key) + 1 : 1);
  }
  const sortedDegree: number[] = new Array(...degree);
  sortedDegree.sort((a, b) => a - b);
  const ans: number[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const target = queries[i];
    let count = 0;
    let left = 1, right = sortedDegree.length - 1;
    while (left < right) {
      if (sortedDegree[left] + sortedDegree[right] <= target) left++;
      else {
        count += right - left;
        right--;
      }
    }
    for (let k = 0; k < distinctEdges.length; k++) {
      const [u, v] = distinctEdges[k];
      if (degree[u] + degree[v] > target && degree[u] + degree[v] - commonEdge.get(getKey(u, v)) <= target) {
        count--;
      }
    }
    ans[i] = count;
  }
  return ans;
  function getKey(u: number, v: number) {
    const max = Math.max(u, v);
    const min = Math.min(u, v);
    return min * (n + 1) + max;
  }
};
