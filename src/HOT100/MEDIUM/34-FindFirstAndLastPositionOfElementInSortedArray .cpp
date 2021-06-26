//
// Created by ZiqianCheng on 2021/6/21.
//

// MEDIUM https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array


/*
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> searchRange(vector<int>& nums, int target) {
    return {lowerBound(nums, target), upperBound(nums, target)};
  }

  int lowerBound(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    return left >= nums.size() || nums[left] != target ? -1 : left;
  }

  int upperBound(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    return right < 0 || nums[right] != target ? -1 : right;
  }
};
