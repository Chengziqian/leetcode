// 01/20/2021 EASY

// https://leetcode-cn.com/problems/maximum-product-of-three-numbers/

/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000

 */

function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(nums[0] * nums[1] * nums[n - 1] , nums[n - 1] * nums[n - 2] * nums[n - 3]);
};
