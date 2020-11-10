// 11/10/2020 MEDIUM

// https://leetcode-cn.com/problems/decrease-elements-to-make-array-zigzag/

/*

Given an array nums of integers, a move consists of choosing any element and decreasing it by 1.

An array A is a zigzag array if either:

Every even-indexed element is greater than adjacent elements, ie. A[0] > A[1] < A[2] > A[3] < A[4] > ...
OR, every odd-indexed element is greater than adjacent elements, ie. A[0] < A[1] > A[2] < A[3] > A[4] < ...
Return the minimum number of moves to transform the given array nums into a zigzag array.

 

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.
Example 2:

Input: nums = [9,6,1,6,2]
Output: 4
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000

 */


function movesToMakeZigzag(nums: number[]): number {
  let s1 = 0, s2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const left = i > 0 ? nums[i - 1] : Number.MAX_SAFE_INTEGER;
    const right = i + 1 < nums.length ? nums[i + 1] : Number.MAX_SAFE_INTEGER;
    if (i & 1) {
      s1 += Math.max(0, nums[i] - Math.min(left, right) + 1);
    } else {
      s2 += Math.max(0, nums[i] - Math.min(left, right) + 1);
    }
  }
  return Math.min(s1, s2);
};
