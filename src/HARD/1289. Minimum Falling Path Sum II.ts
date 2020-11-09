// 8/25/2020 HARD

function minFallingPathSum(arr: number[][]): number {
  const dp: number[][] = [];
  const row = arr.length;
  if (!row) return 0;
  if (row === 1) return Math.min(...arr[0]);
  const col = arr[0].length;
  dp[row - 1] = [...arr[row - 1]];
  for (let i = row - 2; i >= 0; i--) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      const compare = [...dp[i + 1]]
      compare.splice(j, 1);
      dp[i][j] = Math.min(...compare) + arr[i][j];
    }
  }
  return Math.min(...dp[0]);
};
