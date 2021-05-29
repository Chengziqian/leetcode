//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/coin-lcci/

/*
 * Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents. (The result may be large, so you should return it modulo 1000000007)

Example1:

 Input: n = 5
 Output: 2
 Explanation: There are two ways:
5=5
5=1+1+1+1+1
Example2:

 Input: n = 10
 Output: 4
 Explanation: There are four ways:
10=10
10=5+5
10=5+1+1+1+1+1
10=1+1+1+1+1+1+1+1+1+1
Notes:

You can assume:

0 <= n <= 1000000
 */
#include <vector>
using namespace std;
class Solution {
public:
  int waysToChange(int n) {
    vector<long long> dp(n + 1, 0);
    int MOD = 1e9 + 7;
    dp[0] = 1;
    vector<int> coins = {1, 5, 10, 25};
    for (int k = 0; k < 4; ++k) {
      for (int i = coins[k]; i <= n; ++i) {
        dp[i] += dp[i - coins[k]] % MOD;
      }
    }
    return dp[n] % MOD;
  }
};