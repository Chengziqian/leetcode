// https://leetcode-cn.com/circle/discuss/fMOTe9/

function solution(coins: number[], k: number, target: number): number {
  const dp: number[][][] = new Array(coins.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(k + 1);
    for (let j = 0; j <= k; j++) dp[i][j] = new Array(target + 1).fill(0);
    dp[i][0][0] = 1;
  }
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= k; j++) {
      for (let t = 0; t <= target; t++) {
        dp[i][j][t] = dp[i - 1][j][t];
        if (t >= coins[i - 1]) dp[i][j][t] += dp[i][j - 1][t - coins[i - 1]];
      }
    }
  }
  let ans = 0;
  for (let j = 0; j <= k; j++) {
    ans += dp[coins.length][j][target];
  }
  return ans;
}

function solution(coins: number[], k: number, target: number): number {
  const dp: number[][] = new Array(k + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(target + 1).fill(0);
  }
  dp[0][0] = 1;
  for (let i = 0; i <= coins.length; i++) {
    for (let j = 1; j <= k; j++) {
      for (let t = coins[i - 1]; t <= target; t++) {
        dp[j][t] += dp[j - 1][t - coins[i - 1]];
      }
    }
  }
  let ans = 0;
  for (let j = 0; j <= k; j++) {
    ans += dp[j][target];
  }
  return ans;
}