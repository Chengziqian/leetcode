// 05/17/2021 EASY

// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

#include <vector>
using namespace std;
class Solution {
  public:
    int numWays(int n) {
      const int MOD = 1e9 + 7;
      vector<int> dp(n + 1, 0);
      dp[0] = 1;
      for (int i = 1; i <= n; i++) {
        if (i == 1) dp[i] = 1;
        else dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
      }
      return dp[n] % MOD;
    }
};