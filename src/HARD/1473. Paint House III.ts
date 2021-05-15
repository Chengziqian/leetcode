// 05/04/2021 HARD

// https://leetcode-cn.com/problems/paint-house-iii/

/*
There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

A neighborhood is a maximal group of continuous houses that are painted with the same color.

For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].
Given an array houses, an m x n matrix cost and an integer target where:

houses[i]: is the color of the house i, and 0 if the house is not painted yet.
cost[i][j]: is the cost of paint the house i with the color j + 1.
Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return -1.

 

Example 1:

Input: houses = [0,0,0,0,0], cost = 3, m = 5, n = 2, target = 3
Output: 9
Explanation: Paint houses of this way [1,2,2,1,1]
This array contains target = 3 neighborhoods, [{1}, {2,2}, {1,1}].
Cost of paint all houses (1 + 1 + 1 + 1 + 5) = 9.
Example 2:

Input: houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
Output: 11
Explanation: Some houses are already painted, Paint the houses of this way [2,2,1,2,2]
This array contains target = 3 neighborhoods, [{2,2}, {1}, {2,2}]. 
Cost of paint the first and last house (10 + 1) = 11.
Example 3:

Input: houses = [0,0,0,0,0], cost = [[1,10],[10,1],[1,10],[10,1],[1,10]], m = 5, n = 2, target = 5
Output: 5
Example 4:

Input: houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3
Output: -1
Explanation: Houses are already painted with a total of 4 neighborhoods [{3},{1},{2},{3}] different of target = 3.
 

Constraints:

m == houses.length == cost.length
n == cost[i].length
1 <= m <= 100
1 <= n <= 20
1 <= target <= m
0 <= houses[i] <= n
1 <= cost[i][j] <= 10^4
*/

function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
  const dp: number[][][] = new Array(m + 1);
  const MAX = 1e6 + 1;
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j <= n; j++) {
      dp[i][j] = new Array(target + 1).fill(MAX);
    }
  }
  dp[0][0][0] = 0;

  for (let i = 1; i <= m; i++) {
    if (houses[i - 1] !== 0) {
      for (let t = 0; t <= target; t++) {
        dp[i][houses[i - 1]][t] = dp[i - 1][houses[i - 1]][t];
        if (t > 0) {
          for (let xc = 0; xc <= n; xc++) {
            if (xc !== houses[i - 1]) dp[i][houses[i - 1]][t] = Math.min(dp[i - 1][xc][t - 1], dp[i][houses[i - 1]][t]);
          }
        }
      }
    } else {
      for (let c = 1; c <= n; c++) {
        for (let t = 0; t <= target; t++) {
          dp[i][c][t] = dp[i - 1][c][t] + cost[i - 1][c - 1];
          if (t > 0) {
            for (let xc = 0; xc <= n; xc++) {
              if (xc !== c) dp[i][c][t] = Math.min(dp[i - 1][xc][t - 1] + cost[i - 1][c - 1], dp[i][c][t]);
            }
          }
        }
      }
    }
  }

  let ans = MAX;
  for (let c = 1; c <= n; c++) {
    ans = Math.min(ans, dp[m][c][target]);
  }
  return ans >= MAX ? -1 : ans;
};