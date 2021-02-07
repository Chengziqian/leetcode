// 02/03/2021 EASY

// https://leetcode-cn.com/problems/maximum-average-subarray-i

/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
 

 */

function findMaxAverage(nums: number[], k: number): number {
  const sum: number[] = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  
  let left = 0, right = k - 1;
  let ans = Number.MIN_SAFE_INTEGER;
  while (right < nums.length) {
    ans = Math.max(ans, (sum[right + 1] - sum[left]) / k);
    left++;
    right++;
  }
  return ans;
};
