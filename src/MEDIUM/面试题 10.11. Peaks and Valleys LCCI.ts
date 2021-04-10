// 03/22/2021 MEDIUM

// https://leetcode-cn.com/problems/peaks-and-valleys-lcci/

/*
In an array of integers, a "peak" is an element which is greater than or equal to the adjacent integers 
and a "valley" is an element which is less than or equal to the adjacent integers. 
For example, in the array {5, 8, 4, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys.
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.

Example:

Input: [5, 3, 1, 2, 3]
Output: [5, 1, 3, 2, 3]
Note:

nums.length <= 10000

 */

/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
  for (let i = 1; i < nums.length; i++) {
    if (i & 1) {
      if (nums[i] > nums[i - 1]) [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    } else {
      if (nums[i] < nums[i - 1]) [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    }
  }
};
