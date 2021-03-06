function kthLargestValue(matrix: number[][], k: number): number {
  const row = matrix.length;
  const col = matrix[0].length;
  const dp: number[][] = new Array(row);
  const value: number[] = [];
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(col).fill(0);
  }
  dp[0][0] = matrix[0][0];
  value.push(dp[0][0]);
  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] ^ matrix[0][j];
    value.push(dp[0][j]);
  }
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] ^ matrix[i][0];
    value.push(dp[i][0]);
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = dp[i - 1][j - 1] ^ dp[i - 1][j] ^ dp[i][j - 1] ^ matrix[i][j];
      value.push(dp[i][j]);
    }
  }
  value.sort((a, b) => b - a);
  return value[k - 1];
};