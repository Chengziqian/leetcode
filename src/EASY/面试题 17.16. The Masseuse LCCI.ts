// 12/01/2020 EASY

// https://leetcode-cn.com/problems/the-masseuse-lcci/

/*
A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. 
She needs a break between appointments and therefore she cannot accept any adjacent requests. 
Given a sequence of back-to-back appoint ment requests, find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

Note: This problem is slightly different from the original one in the book.

 

Example 1:

Input:  [1,2,3,1]
Output:  4
Explanation:  Accept request 1 and 3, total minutes = 1 + 3 = 4
Example 2:

Input:  [2,7,9,3,1]
Output:  12
Explanation:  Accept request 1, 3 and 5, total minutes = 2 + 9 + 1 = 12
Example 3:

Input:  [2,1,4,5,3,1,1,3]
Output:  12
Explanation:  Accept request 1, 3, 5 and 8, total minutes = 2 + 4 + 3 + 3 = 12

 */

function massage(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length < 2) return nums[0];
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[nums.length - 1];
};


