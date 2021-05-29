//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/

#include <vector>
#include <math.h>
#include <iostream>
using namespace std;
class Solution {
public:
  vector<double> dicesProbability(int n) {
    double total = pow(6, n);
    vector<vector<int>> dp(n + 1, vector<int>(6 * n + 1, 0));
    for (int k = 1; k <= 6; k++) dp[1][k] = 1;
    for (int i = 2; i <= n; ++i) {
      for (int j = i; j <= i * 6; ++j) {
        for (int k = 1; k <= 6; ++k) {
          if (j - k >= i - 1) {
            dp[i][j] += dp[i - 1][j - k];
          }
        }
      }
    }
    vector<double> ans;
    for (int j = n; j <= 6 * n; ++j) {
      ans.push_back(dp[n][j] / total);
    }
    return ans;
  }
};

int main() {
  Solution s;
  vector<double> a1 = s.dicesProbability(2);
  for (auto a: a1) cout << a << " ";
  return 0;
}