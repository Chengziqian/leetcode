// 11/19/2020 MEDIUM

// https://leetcode-cn.com/problems/coloring-a-border/

/*

Given a 2-dimensional grid of integers, each value in the grid represents the color of the grid square at that location.

Two squares belong to the same connected component if and only if they have the same color and are next to each other in any of the 4 directions.

The border of a connected component is all the squares in the connected component that are either 4-directionally adjacent to a square not in the component, or on the boundary of the grid (the first or last row or column).

Given a square at location (r0, c0) in the grid and a color, color the border of the connected component of that square with the given color, and return the final grid.

 

Example 1:

Input: grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
Output: [[3, 3], [3, 2]]
Example 2:

Input: grid = [[1,2,2],[2,3,2]], r0 = 0, c0 = 1, color = 3
Output: [[1, 3, 3], [2, 3, 3]]
Example 3:

Input: grid = [[1,1,1],[1,1,1],[1,1,1]], r0 = 1, c0 = 1, color = 2
Output: [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
 

Note:

1 <= grid.length <= 50
1 <= grid[0].length <= 50
1 <= grid[i][j] <= 1000
0 <= r0 < grid.length
0 <= c0 < grid[0].length
1 <= color <= 1000

 */

function colorBorder(grid: number[][], r0: number, c0: number, color: number): number[][] {
  const rowLen = grid.length;
  if (!rowLen) return grid;
  const colLen = grid[0].length;
  const visited: boolean[][] = [];
  const originColor = grid[r0][c0];
  if (originColor === color) return grid;
  for (let i = 0; i < rowLen; i++) {
    visited.push(new Array(colLen).fill(false));
  }
  const direction: number[][] = [[-1, 0], [0, 1], [1, 0], [0 ,-1]];
  dfs(r0, c0);
  return grid;
  function dfs(row: number, col: number) {
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) return true;
    if (!visited[row][col] && grid[row][col] !== originColor) return true;
    if (visited[row][col]) return false;
    visited[row][col] = true;
    for (let i = 0; i < direction.length; i++) {
      if (dfs(row + direction[i][0], col + direction[i][1])) {
        grid[row][col] = color;
      }
    }
    return false;
  }
};
