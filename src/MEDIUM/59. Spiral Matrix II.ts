// 03/16/2021 MEDIUM

// https://leetcode-cn.com/problems/spiral-matrix-ii/

/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:


Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20

 */


function generateMatrix(n: number): number[][] {
  const ans: number[][] = new Array(n);
  const vis: boolean[][] = new Array(n);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = new Array(n);
    vis[i] = new Array(n).fill(false);
  }
  const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let index = 0;
  let i = 0;
  let j = 0;
  for (let k = 1; k <= n * n; k++) {
    ans[i][j] = k;
    vis[i][j] = true;
    let [di, dj] = d[index];
    let [ni, nj] = [i + di, j + dj];
    if (ni < 0 || ni >= n || nj < 0 || nj >= n || vis[ni][nj]) {
      index = (index + 1) % 4;
      [di, dj] = d[index];
      [ni, nj] = [i + di, j + dj];
    }
    i = ni;
    j = nj;
  }
  return ans;
};
