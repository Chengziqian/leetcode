// 04/15/2012 MEDIUM

// https://leetcode-cn.com/problems/house-robber-ii/

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [0]
Output: 0
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

 */
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const dp1: number[] = new Array(nums.length);
  const dp2: number[] = new Array(nums.length);
  dp1[1] = nums[1];
  dp1[2] = Math.max(nums[1], nums[2]);
  dp2[0] = nums[0];
  dp2[1] = Math.max(nums[0], nums[1]);
  for (let i = 3; i < nums.length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
  }
  for (let i = 2; i < nums.length - 1; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }
  return Math.max(dp1[nums.length - 1], dp2[nums.length - 2]);
};
