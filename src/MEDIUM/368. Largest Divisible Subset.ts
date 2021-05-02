// 04/23/2021 MEDIUM

// https://leetcode-cn.com/problems/largest-divisible-subset/

/*
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
Example 2:

Input: nums = [1,2,4,8]
Output: [1,2,4,8]
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
All the integers in nums are unique.
 */

function largestDivisibleSubset(nums: number[]): number[] {
  const dp: number[] = new Array(nums.length).fill(1);
  const path: number[] = new Array(nums.length);
  for (let i = 0; i < path.length; i++) path[i] = i;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          path[i] = j;
        }
      }
    }
  }
  let maxLen = 0;
  let index = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      index = i;
    }
  }
  const ans: number[] = new Array(maxLen);
  for (let i = maxLen - 1; i >= 0; i--) {
    ans[i] = nums[index];
    index = path[index];
  }
  return ans;
};
