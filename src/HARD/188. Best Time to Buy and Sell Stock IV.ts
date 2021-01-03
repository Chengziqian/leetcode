// 12/28/2020 HARD

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

Constraints:

0 <= k <= 109
0 <= prices.length <= 1000
0 <= prices[i] <= 1000

*/

function maxProfit(k: number, prices: number[]): number {
  const maxTransactionCount = (prices.length >> 1);
  const dp: number[][] = new Array(maxTransactionCount + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = [0, 0];
  }
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = -prices[0]
  }
  for (let k = 0; k < prices.length; k++) {
    for (let i = 1; i < dp.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][1] - prices[k], dp[i][0]);
      dp[i][1] = Math.max(dp[i][0] + prices[k], dp[i][1]);
    }
  }
  let ans = 0;
  for (let i = 1; i <= k && i < dp.length; i++) {
    ans = Math.max(Math.max(dp[i][0], dp[i][1]), ans)
  }
  return ans;
};