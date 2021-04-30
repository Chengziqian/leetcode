// 04/30/2021 MEDIUM

// https://leetcode-cn.com/problems/single-number-ii/

/*
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
 

Follow up: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 */

// function singleNumber(nums: number[]): number {
//   let ans = 0;
//   for (let k = 0; k < 32; k++) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if ((nums[i] >>> k) & 1) count++;
//     }
//     ans |= (count % 3) << k;
//   }
//   return ans;
// };
//
// function singleNumber(nums: number[]): number {
//   let a = 0, b = 0;
//   for (let i = 0; i < nums.length; i++) {
//     [a, b] = [(~a & b & nums[i]) | (a & ~b & ~nums[i]), ~a & (b ^ nums[i])];
//   }
//   return b;
// };

function singleNumber(nums: number[]): number {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    b = ~a & (b ^ nums[i]);
    a = ~b & (a ^ nums[i]); 
  }
  return b;
};
