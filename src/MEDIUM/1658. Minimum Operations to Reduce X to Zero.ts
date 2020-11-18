// 11/16/2020 MEDIUM

// https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/

/*
You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.

 

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1
Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
 */

function minOperations(nums: number[], x: number): number {
  let left = 0, right = 0;
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  const target = sum - x;
  let curSum = 0;
  let ans = -1;
  while (left < nums.length) {
    if (right < nums.length) {
      curSum += nums[right++];
    }
    while (curSum > target && left < nums.length) curSum -= nums[left++];
    if (curSum === target) ans = Math.max(ans, right - left);
    if (right === nums.length) left++;
  }
  return ans === -1 ? -1 : nums.length - ans;
};
