//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  bool isStraight(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int n = nums.size();
    int zeroCount = 0;
    for (int i = 0; i < n - 1; ++i) {
      if (nums[i] == 0) {
        zeroCount++;
      } else {
        if (nums[i + 1] - nums[i] != 1) {
          if (nums[i + 1] == nums[i]) return false;
          if (zeroCount < nums[i + 1] - nums[i] - 1) return false;
          else zeroCount -= nums[i + 1] - nums[i] - 1;
        }
      }
    }
    return true;
  }
};