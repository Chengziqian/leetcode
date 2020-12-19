// 09/23/2020 MEDIUM

// https://leetcode-cn.com/problems/wiggle-subsequence/

/**
 * A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate between positive and negative. 
 * The first difference (if one exists) may be either positive or negative. 
 * A sequence with fewer than two elements is trivially a wiggle sequence.

 For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. 
 In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.

 Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.

 Example 1:

 Input: [1,7,4,9,2,5]
 Output: 6
 Explanation: The entire sequence is a wiggle sequence.
 Example 2:

 Input: [1,17,5,10,13,15,10,5,16,8]
 Output: 7
 Explanation: There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].
 Example 3:

 Input: [1,2,3,4,5,6,7,8,9]
 Output: 2
 Follow up:
 Can you do it in O(n) time?
 
 */

// function wiggleMaxLength(nums: number[]): number {
//   if (!nums.length) return 0;
//   if (nums.length < 2) return 1;
//   let ans: number = 0;
//   let flag: boolean = false;
//   let startIndex = 0;
//   while (startIndex + 1 < nums.length && nums[startIndex] === nums[startIndex + 1]) startIndex++;
//   if (startIndex + 1 === nums.length) return 1;
//   if (nums[startIndex] > nums[startIndex + 1]) flag = true;
//   else if (nums[startIndex] < nums[startIndex + 1]) flag = false;
//   ans = 2;
//   for (let i = 2; i < nums.length; i++) {
//     const currentFlag: boolean = !flag;
//     if (currentFlag && nums[i - 1] > nums[i]) {
//       ans++;
//       flag = currentFlag;
//     }
//     if (!currentFlag && nums[i - 1] < nums[i]) {
//       ans++;
//       flag = currentFlag;
//     }
//   }
//   return ans;
// };

function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  const up: number[] = new Array(nums.length).fill(0);
  const down: number[] = new Array(nums.length).fill(0);
  up[0] = 1;
  down[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = Math.max(up[i - 1], down[i - 1] + 1);
      down[i] = down[i - 1]
    } else if (nums[i] < nums[i - 1]) {
      up[i] = up[i - 1];
      down[i] = Math.max(down[i - 1], up[i - 1] + 1);
    } else {
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }
  }
  return Math.max(up[nums.length - 1], down[nums.length - 1]);
};
