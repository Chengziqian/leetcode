// 01/04/2021 MEDIUM

// https://leetcode-cn.com/problems/ways-to-split-array-into-three-subarrays/

/*

A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

 

Example 1:

Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].
Example 2:

Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]
Example 3:

Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.
 

Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 104

 */

function waysToSplit(nums: number[]): number {
  const sum: number[] = new Array(nums.length + 1).fill(0);
  const MOD = 1e9 + 7;
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  let ans = 0;
  const limit = Math.floor(sum[sum.length - 1] / 3);
  for (let i = 0; i < nums.length && nums[i] <= limit; i++) {
    const leftSum = sum[i + 1];
    const lo = lowerBound(i + 2, nums.length - 1, 2 * leftSum);
    const hi = upperBound(i + 2, nums.length - 1, leftSum + ((sum[sum.length - 1] - leftSum) >> 1));
    if (lo <= hi) {
      ans += hi - lo + 1;
    }
  }
  
  return ans % MOD;
  
  function lowerBound(left: number, right: number, target: number) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (sum[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  }
  
  function upperBound(left: number, right: number, target: number) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (sum[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
};
