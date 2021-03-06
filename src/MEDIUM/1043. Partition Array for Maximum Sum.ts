// 02/03/2021 MEDIUM

// https://leetcode-cn.com/problems/partition-array-for-maximum-sum/

/*
Given an integer array arr, 
you should partition the array into (contiguous) subarrays of length at most k.
After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning.

 

Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4    
Output: 83
Example 3:

Input: arr = [1], k = 1
Output: 1
 

Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 109
1 <= k <= arr.length

 */
function maxSumAfterPartitioning(arr: number[], k: number): number {
  const dp: number[] = new Array(arr.length).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < Math.min(k, arr.length); i++) {
    max = Math.max(max, arr[i]);
    dp[i] = (i + 1) * max;
  }
  for (let i = k; i < arr.length; i++) {
    let max = arr[i];
    for (let j = i - 1; j >= i - k; j--) {
      max = Math.max(max, arr[j + 1]);
      dp[i] = Math.max(dp[j] + max * (i - j), dp[i]);
    }
  }
  return dp[arr.length - 1];
};
