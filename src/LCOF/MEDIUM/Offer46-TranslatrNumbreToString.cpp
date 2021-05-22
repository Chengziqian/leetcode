//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  int translateNum(int num) {
    string str = to_string(num);
    int n = str.size();
    vector<int> dp(n + 1, 1);
    for (int i = 2; i <= n; i++) {
      dp[i] = dp[i - 1];
      string s = str.substr(i - 2, 2);
      int currentNum = stoi(s);
      if (currentNum >= 10 && currentNum <= 25) {
        dp[i] += dp[i - 2];
      }
    }
    return dp[n];
  }
};