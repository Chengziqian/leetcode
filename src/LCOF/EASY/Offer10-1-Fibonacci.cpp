// 05/17/2021 EASY

// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/

#include <vector>
#include <iostream>
using namespace std;
class Solution {
  public:
    int fib(int n) {
      if (n <= 1) return n;
      vector<int> dp(n + 1, 0);
      const int MOD = 1e9 + 7;
      dp[1] = 1;
      for (int i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
      }
      return dp[n] % MOD;
    }
};
int main() {
  Solution s;
  cout << s.fib(1) << endl;
}