// 01/07/2021 MEDIUM

// https://leetcode-cn.com/problems/number-of-provinces/

/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 

Constraints:

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

 */

function findCircleNum(isConnected: number[][]): number {
  let row = isConnected.length;
  if (!row) return 0;
  let col = isConnected[0].length;
  let ans = row;
  const parent: number[] = new Array(row);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (isConnected[i][j]) {
        union(i, j);
      }
    }
  }
  return ans;
  
  function find(n: number): number {
    return parent[n] === n ? n : parent[n] = find(parent[n]);
  }
  
  function union(x: number, y: number) {
    const pa = find(x);
    const pb = find(y);
    if (pa === pb) return;
    ans--;
    parent[pa] = pb;
  }
};
