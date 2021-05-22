//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/chou-shu-lcof/

#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
  int nthUglyNumber(int n) {
    vector<int> dp(n + 1, 1);
    int p2 = 1, p3 = 1, p5 = 1;
    for (int i = 2; i <= n; ++i) {
      dp[i] = min({ dp[p2] * 2, dp[p3] * 3, dp[p5] * 5 });
      if (dp[i] == dp[p2] * 2) p2++;
      if (dp[i] == dp[p3] * 3) p3++;
      if (dp[i] == dp[p5] * 5) p5++;
      cout << dp[i] << endl;
    }
    return dp[n];
  }
};

int main() {
  Solution s;
  cout << s.nthUglyNumber(10) << endl;
  return 0;
}