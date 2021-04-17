// 04/16/2021 MEDIUM

// https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/

/*
Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

 

Constraints:

1 <= nums.length <= 2000
-106 <= nums[i] <= 106

 */

function findNumberOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1);
  const count: number[] = new Array(nums.length).fill(1);
  let maxLen = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return dp.reduce((pre, cur, currentIndex) => {
    if (cur === maxLen) pre += count[currentIndex];
    return pre;
  }, 0);
};
