// 12/12/2020

// https://leetcode-cn.com/problems/dice-roll-simulation/

/* 
A die simulator generates a random number from 1 to 6 for each roll. You introduced a constraint to the generator such that it cannot roll the number i more than rollMax[i] (1-indexed) consecutive times. 

Given an array of integers rollMax and an integer n, return the number of distinct sequences that can be obtained with exact n rolls.

Two sequences are considered different if at least one element differs from each other. Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: n = 2, rollMax = [1,1,2,2,2,3]
Output: 34
Explanation: There will be 2 rolls of die, if there are no constraints on the die, there are 6 * 6 = 36 possible combinations. In this case, looking at rollMax array, the numbers 1 and 2 appear at most once consecutively, therefore sequences (1,1) and (2,2) cannot occur, so the final answer is 36-2 = 34.
Example 2:

Input: n = 2, rollMax = [1,1,1,1,1,1]
Output: 30
Example 3:

Input: n = 3, rollMax = [1,1,1,2,2,3]
Output: 181

*/

function dieSimulator(n: number, rollMax: number[]): number {
  const dp: number[][] = [];
  const MOD = 1e9 + 7;
  for (let i = 0; i <= n; i++) {
    dp.push(new Array(7).fill(0));
  }
  for (let k = 1; k <= 6; k++) {
    dp[1][k] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 6; j++) {
      for (let k = 1; k <= 6; k++) {
        dp[i][j] += dp[i - 1][k];
      }
      const index = i - rollMax[j - 1] - 1;
      if (index > 0) {
        for (let k = 1; k <= 6; k++) {
          if (k !== j) {
            dp[i][j] = (dp[i][j] - dp[index][k] + MOD) % MOD;
          }
        }
      } else if (index === 0) {
        dp[i][j]--;
      }
    }
  }
  return dp[n].reduce((pre, cur) => pre + (cur % MOD), 0) % MOD;
};