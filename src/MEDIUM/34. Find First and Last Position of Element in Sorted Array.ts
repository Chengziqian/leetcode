// 12/01/2020 MEDIUM

// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/*
Given an array of integers nums sorted in ascending order,、
 find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

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

function searchRange(nums: number[], target: number): number[] {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      let start = mid, end = mid;
      while (start >= 0 && nums[start] === target) start--;
      while (end < nums.length &&  nums[end] === target) end++;
      return [start + 1, end - 1];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1]
};
