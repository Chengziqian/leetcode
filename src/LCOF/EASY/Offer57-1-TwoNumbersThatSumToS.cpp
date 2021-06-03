//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
      int sum = nums[left] + nums[right];
      if (sum == target) return {nums[left], nums[right]};
      else if (sum < target) left++;
      else right--;
    }
    return {};
  }
};