//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/

#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
  int maxProfit(vector<int>& prices) {
    int leftMin = INT_MAX;
    int n = prices.size();
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      if (leftMin < prices[i]) ans = max(ans, prices[i] - leftMin);
      leftMin = min(leftMin, prices[i]);
    }
    return ans;
  }
};