//
// Created by 程子骞 on 2021/6/20.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  vector<int> minDifference(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> diff(n, 0);
    diff[0] = nums[0];
    for (int i = 1; i < n; ++i) {
      diff[i] = nums[i] - nums[i - 1] == 0 ? INT_MAX / 2 : nums[i] - nums[i - 1];
    }
    vector<int> ans;
    for (auto& q: queries) {
      int left = q[0], right = q[1];
      vector<int> dp(right - left, 0);
      dp[0] = diff[left + 1];
      int cur = abs(dp[0]);
      for (int i = 1; i < right - left; ++i) {
        if (abs(dp[i - 1] + diff[left + 1 + i]) < abs(diff[left + 1 + i])) {
          dp[i] = dp[i - 1] + diff[left + 1 + i];
        } else {
          dp[i] = diff[left + 1 + i];
        }
        cur = min(cur, abs(dp[i]));
      }
      ans.push_back(cur >= INT_MAX / 2 ? -1 : cur);
    }
    return ans;
  }
};