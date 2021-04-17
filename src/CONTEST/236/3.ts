function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length;
  const dp: number[][] = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(3).fill(Infinity);
  }
  dp[0][0] = 1;
  dp[0][1] = 0;
  dp[0][2] = 1;
  for (let i = 1; i < n; i++) {
    if(obstacles[i] != 1) dp[i][0] = dp[i-1][0];
    if(obstacles[i] != 2) dp[i][1] = dp[i-1][1];
    if(obstacles[i] != 3) dp[i][2] = dp[i-1][2];
    if(obstacles[i] != 1) dp[i][0] = Math.min(dp[i][0], Math.min(dp[i][1], dp[i][2]) + 1);
    if(obstacles[i] != 2) dp[i][1] = Math.min(dp[i][1], Math.min(dp[i][0], dp[i][2]) + 1);
    if(obstacles[i] != 3) dp[i][2] = Math.min(dp[i][2], Math.min(dp[i][0], dp[i][1]) + 1);
  }
  return Math.min(...dp[n - 1]);
};