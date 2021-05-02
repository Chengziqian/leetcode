// 04/24/2021 MEDIUM

// https://leetcode-cn.com/problems/coin-change-2/

/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
 

Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
0 <= amount <= 5000

*/

function change(amount: number, coins: number[]): number {
  const dp: number[][] = new Array(coins.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(amount + 1).fill(0);
  }
  dp[0][0] = 1;
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= coins[i - 1]) dp[i][j] += dp[i][j - coins[i - 1]];
    }
  }
  return dp[coins.length][amount];
};