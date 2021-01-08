// 01/07/2021 MEDIUM

// https://leetcode-cn.com/problems/max-area-of-island/

/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
 You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
 */
function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length;
  if (!row) return 0;
  const col = grid[0].length;
  const visited: boolean[][] = new Array(row);
  const direction: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(false);
  }
  let ans = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        ans = Math.max(ans, bfs(i, j))
      }
    }
  }
  return ans;
  function bfs(x: number, y: number) {
    let ans = 1;
    const queue: number[][] = [];
    visited[x][y] = true;
    queue.push([x, y]);
    while (queue.length) {
      const current = queue.pop() as number[];
      for (let i = 0; i < 4; i++) {
        const [dx, dy] = direction[i];
        const [cx, cy] = current;
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx >= 0 && nx < row && ny >= 0 && ny < col && grid[nx][ny] === 1 && !visited[nx][ny]) {
          ans++;
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    return ans;
  }
};
