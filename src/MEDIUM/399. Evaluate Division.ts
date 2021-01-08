// 01/06/2020 MEDIUM

// https://leetcode-cn.com/problems/evaluate-division/

/*
You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

 

Example 1:

Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
Example 2:

Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
Example 3:

Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 

Constraints:

1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.

 */
namespace CalcEquation {
  interface GraphNode {
    index: number,
    factor: number
  }
  function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const indexMap: Map<string, number> = new Map<string, number>();
    let counter: number = 0;
    const adjList: GraphNode[][] = new Array(40);
    const parent: number[] = new Array(40);
    for (let i = 0; i < 40; i++) {
      adjList[i] = [];
      parent[i] = i;
    }
    const visited: boolean[] = new Array(40).fill(false);
    for (let i = 0; i < equations.length; i++) {
      const [a, b] = equations[i];
      const factor = values[i];
      let u, v;
      if (indexMap.has(a)) {
        u = indexMap.get(a);
      } else {
        u = counter++;
        indexMap.set(a, u);
      }
      if (indexMap.has(b)) {
        v = indexMap.get(b);
      } else {
        v = counter++;
        indexMap.set(b, v);
      }
      adjList[u].push({ index: v, factor });
      adjList[v].push({ index: u, factor: 1 / factor });
      union(u, v);
    }
    const ans: number[] = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
      const [a, b] = queries[i];
      if (indexMap.has(a) && indexMap.has(b)) {
        const indexA = indexMap.get(a);
        const indexB = indexMap.get(b);
        if (find(indexA) !== find(indexB)) ans[i] = -1.0;
        else {
          ans[i] = search(indexA, 1, indexB);
        }
      } else {
        ans[i] = -1.0
      }
    }
    
    return ans;
    
    function search(currentIndex: number, currentValue: number, target: number): number {
      if (currentIndex === target) return currentValue;
      for (let i = 0; i < adjList[currentIndex].length; i++) {
        const { index, factor } = adjList[currentIndex][i];
        if (visited[index]) continue;
        visited[index] = true;
        const ans = search(index, currentValue * factor, target);
        visited[index] = false;
        if (ans !== -1) return ans;
      }
      return -1;
    }
    
    
    function find(x: number): number {
      return x === parent[x] ? x : parent[x] = find(parent[x]);
    }
    
    function union(x: number, y: number) {
      const px = find(x);
      const py = find(y);
      if (px === py) return;
      parent[px] = py;
    }
  }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const indexMap: Map<string, number> = new Map<string, number>();
  let counter: number = 0;
  for (let i = 0; i < equations.length; i++) {
    const [x, y] = equations[i];
    if (!indexMap.has(x)) indexMap.set(x, counter++);
    if (!indexMap.has(y)) indexMap.set(y, counter++);
  }
  const parent: number[] = new Array(counter);
  const weight: number[] = new Array(counter);
  for (let i = 0; i < counter; i++) {
    weight[i] = 1;
    parent[i] = i;
  }
  for (let i = 0; i < equations.length; i++) {
    const [x, y] = equations[i];
    const factor = values[i]
    union(indexMap.get(x), indexMap.get(y), factor);
  }
  const ans: number[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [x, y] = queries[i];
    let res = -1;
    if (indexMap.has(x) && indexMap.has(y)) {
      const ix = indexMap.get(x);
      const iy = indexMap.get(y)
      const fx = find(ix);
      const fy = find(iy);
      if (fx === fy) {
        res = weight[ix] / weight[iy];
      }
    }
    ans[i] = res;
  }
  return ans;
  
  function find(x: number): number {
    if (x !== parent[x]) {
      const f = find(parent[x]);
      weight[x] *= weight[parent[x]];
      parent[x] = f;
    }
    return parent[x];
  }

  function union(x: number, y: number, factor: number) {
    const px = find(x);
    const py = find(y);
    if (px === py) return;
    parent[px] = py;
    weight[px] = factor * weight[y] / weight[x]
  }
}

