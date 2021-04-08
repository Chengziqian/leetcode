// 04/08/2021 MEDIUM

// https://leetcode-cn.com/problems/number-of-closed-islands/

/*
Given a 2D grid consists of 0s (land) and 1s (water).
An island is a maximal 4-directionally connected group of 0s and
 a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
 

Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1

 */

function closedIsland(grid: number[][]): number {
  let ans = 0;
  const row = grid.length;
  const col = grid[0].length;
  const vis: boolean[][] = new Array(row);
  const dir: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let i = 0; i < row; i++) {
    vis[i] = new Array(col).fill(false);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!vis[i][j] && grid[i][j] === 0) {
        if (dfs(i, j)) ans++;
      }
    }
  }
  return ans;
  
  function dfs(i: number, j: number): boolean {
    vis[i][j] = true;
    let isValid = true;
    for (let k = 0; k < dir.length; k++) {
      const [di, dj] = dir[k];
      const [ni, nj] = [i + di, j + dj];
      if (ni < 0 || ni >= row || nj < 0 || nj >= col) {
        isValid = false;
        continue;
      }
      if (vis[ni][nj] || grid[ni][nj] === 1) continue;
      isValid = dfs(ni, nj) && isValid;
    }
    return isValid;
  }
};
