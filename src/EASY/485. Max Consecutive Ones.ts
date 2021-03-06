// 02/15/2021 EASY

// https://leetcode-cn.com/problems/max-consecutive-ones/

/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

 */


function findMaxConsecutiveOnes(nums: number[]): number {
  let left = 0, right = 0;
  let ans = 0;
  while (right < nums.length) {
    while (right < nums.length && nums[right] === 0) right++;
    left = right;
    while (right < nums.length && nums[right] === 1) right++;
    ans = Math.max(right - left, ans);
  }
  return ans;
};
