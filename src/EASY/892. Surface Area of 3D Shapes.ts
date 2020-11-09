function surfaceArea(grid: number[][]): number {
  const row = grid.length;
  let res = 0;
  if (!row) return 0;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] != 0) {
        let curr = 4 * grid[i][j] + 2;
        if (i - 1 >= 0 && i - 1 < row && j < col) curr -= Math.min(grid[i-1][j], grid[i][j]);
        if (i + 1 < row && j < col) curr -= Math.min(grid[i+1][j], grid[i][j]);
        if (i < row && j + 1 < col) curr -= Math.min(grid[i][j+1], grid[i][j]);
        if (i < row && j - 1 >= 0 && j - 1 < col) curr -= Math.min(grid[i][j-1], grid[i][j]);
        res += curr;
      }
    }
  }
  return res;
};
