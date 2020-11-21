// 11/20/2020 MEDIUM

// https://leetcode-cn.com/problems/delete-and-earn/

/*

Given an array nums of integers, you can perform operations on the array.

In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

You start with 0 points. Return the maximum number of points you can earn by applying such operations.

Example 1:

Input: nums = [3, 4, 2]
Output: 6
Explanation: 
Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points. 6 total points are earned.
 

Example 2:

Input: nums = [2, 2, 3, 3, 3, 4]
Output: 9
Explanation: 
Delete 3 to earn 3 points, deleting both 2's and the 4.
Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
9 total points are earned.
 

Note:

The length of nums is at most 20000.
Each element nums[i] is an integer in the range [1, 10000].

 */

function deleteAndEarn(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  const count: number[] = new Array(10001).fill(0);
  let maxIndex = nums[0];
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
    maxIndex = Math.max(nums[i], maxIndex);
  }
  const dp: number[] = new Array(maxIndex + 1).fill(0);
  dp[1] = count[1];
  dp[2] = Math.max(count[1], count[2] * 2);
  for (let i = 2; i <= maxIndex; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + count[i] * i);
  }
  return dp[maxIndex];
};
