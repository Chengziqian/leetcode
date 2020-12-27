function findBall(grid: number[][]): number[] {
  const row = grid.length; 
  const col = grid[0].length;
  const ans: number[] = new Array(col);
  // 简单模拟，判断卡住的情况
  for (let k = 0; k < ans.length; k++) {
    let j = k;
    let i = 0;
    for (; i < row; i++) {
      if (grid[i][j] === 1) {
        if (j + 1 >= col || grid[i][j + 1] === -1) break;
        j = j + 1;
      } else {
        if (j - 1 < 0 || grid[i][j - 1] === 1) break;
        j = j - 1;
      }
    }
    ans[k] = i === row ? j : -1;
  }
  return ans;
};