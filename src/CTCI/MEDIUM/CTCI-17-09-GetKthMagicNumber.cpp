//
// Created by ZiqianCheng on 2021/6/7.
//

// MEDIUM https://leetcode-cn.com/problems/get-kth-magic-number-lcci

/*
 * Design an algorithm to find the kth number such that the only prime factors are 3, 5, and 7.
 * Note that 3, 5, and 7 do not have to be factors, but it should not have any other prime factors.
 * For example, the first several multiples would be (in order) 1, 3, 5, 7, 9, 15, 21.

Example 1:

Input: k = 5

Output: 9
 */

#include <vector>
using namespace std;
class Solution {
public:
  int getKthMagicNumber(int k) {
    vector<int> dp(k, 1);
    int index3 = 0, index5 = 0, index7 = 0;
    for (int i = 1; i < k; ++i) {
      dp[i] = min(dp[index3] * 3, min(dp[index5] * 5, dp[index7] * 7));
      if (dp[i] == dp[index3] * 3) index3++;
      if (dp[i] == dp[index5] * 5) index5++;
      if (dp[i] == dp[index7] * 7) index7++;
    }
    return dp[k - 1];
  }
};