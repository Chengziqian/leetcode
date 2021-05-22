//
// Created by ZiqianCheng on 2021/5/21.
//

// EASY https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

// nums = [-2,1,-3,4,-1,2,1,-5,4]

#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 0);
    for (int i = 0; i < n; ++i) dp[i] = nums[i];
    int ans = dp[0];
    for (int i = 1; i < n; ++i) {
      dp[i] = max(dp[i], dp[i - 1] + nums[i]);
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};