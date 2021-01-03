// 01/02/2021 MEDIUM

// https://leetcode-cn.com/problems/as-far-from-land-as-possible/

/* 
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

 

Example 1:


Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
Example 2:


Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1

*/

function maxDistance(grid: number[][]): number {
  const row = grid.length;
  if (!row) return -1;
  const col = grid[0].length;
  const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let ans = -1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        ans = Math.max(ans, bfs(i, j));
      }
    }
  }
  return ans;


  function bfs(x: number, y: number) {
    const visited: boolean[][] = new Array(row);
    for (let i = 0; i < visited.length; i++) visited[i] = new Array(col).fill(false);
    const queue: number[][] = [[x, y, 0]];
    visited[x][y] = true;
    while(queue.length) {
      const current = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = current[0] + d[i][0];
        const ny = current[1] + d[i][1];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
        if (!visited[nx][ny]) {
          if (grid[nx][ny] === 1) return current[2] + 1;
          else {
            queue.push([nx, ny, current[2] + 1]);
            visited[nx][ny] = true;
          }
        }
      }
    }
    return -1;
  }
};