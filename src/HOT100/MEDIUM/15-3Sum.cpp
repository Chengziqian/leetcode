//
// Created by ZiqianCheng on 2021/6/19.
//

// MEDIUM https://leetcode-cn.com/problems/3sum/

/*
 *Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    int n = nums.size();
    for (int i = 0; i < n - 2; ++i) {
      if (nums[i] > 0) continue;
      if (i > 0 && nums[i - 1] == nums[i]) continue;
      int target = -nums[i];
      int left = i + 1, right = n - 1;
      while (left < right) {
        if (nums[left] + nums[right] == target) {
          ans.push_back({ nums[i], nums[left], nums[right] });
          left++;
          right--;
          while (left < right && nums[left] == nums[left - 1]) left++;
          while (left < right && nums[right] == nums[right + 1]) right--;
          if (left >= right) break;
        }
        else if (nums[left] + nums[right] < target) left++;
        else right--;
      }
    }
    return ans;
  }
};