function rearrangeSticks(n: number, k: number): number {
  const dp: number[][] = new Array(n + 1);
  const MOD = 1e9 + 7;
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(k + 1).fill(0);
    dp[i][i] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      // dp[i][j] = dp[i - 1][k] dp[i - 1][k - 1]
      if (i - 1 >= j) {
        dp[i][j] += dp[i - 1][j] * (i - j) % MOD;
      }
      dp[i][j] += dp[i - 1][j - 1] * ((1 + i - j) * (i - j) / 2) % MOD
    }
  }
  return dp[n][k] % MOD;
};