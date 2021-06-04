//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/pairs-with-sum-lcci

/*
 * Design an algorithm to find all pairs of integers within an array which sum to a specified value.

Example 1:

Input: nums = [5,6,5], target = 11
Output: [[5,6]]
Example 2:

Input: nums = [5,6,5,6], target = 11
Output: [[5,6],[5,6]]
Note:

nums.length <= 100000
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<vector<int>> pairSums(vector<int>& nums, int target) {
    vector<vector<int>> ans;
    sort(nums.begin(), nums.end());
    int left = 0, right = nums.size() - 1;
    while (left < right) {
      if (nums[left] + nums[right] > target) right--;
      else if (nums[left] + nums[right] < target) left++;
      else {
        ans.push_back({ nums[left], nums[right] });
        left++;
        right--;
      }
    }
    return ans;
  }
};