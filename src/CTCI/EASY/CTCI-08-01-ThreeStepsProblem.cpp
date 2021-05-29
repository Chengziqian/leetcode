//
// Created by ZiqianCheng on 2021/5/28.
//

// EASY https://leetcode-cn.com/problems/three-steps-problem-lcci/

/*
 * A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
 * Implement a method to count how many possible ways the child can run up the stairs.
 * The result may be large, so return it modulo 1000000007.

Example1:

 Input: n = 3
 Output: 4
Example2:

 Input: n = 5
 Output: 13
Note:

 */

#include <vector>
using namespace std;
class Solution {
public:
  int waysToStep(int n) {
    int MOD = 1e9 + 7;
    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; ++i) {
      dp[i] += dp[i - 1] % MOD;
      if (i - 2 >= 0) dp[i] += dp[i - 2] % MOD;
      if (i - 3 >= 0) dp[i] += dp[i - 3] % MOD;
    }
    return dp[n] % MOD;
  }
};