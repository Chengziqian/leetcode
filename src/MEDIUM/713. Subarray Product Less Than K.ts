// 03/09/2021 MEDIUM

// https://leetcode-cn.com/problems/subarray-product-less-than-k/

/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Note:

0 < nums.length <= 50000.
0 < nums[i] < 1000.
0 <= k < 10^6.

 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let left = 0, right = 0;
  let product = 1;
  let ans = 0;
  while (right < nums.length) {
    while (left < nums.length && nums[left] >= k) left++;
    if (left > right) right = left;
    if (product * nums[right] < k) {
      ans += right - left + 1;
      product *= nums[right];
      right++;
    } else {
      product /= nums[left];
      left++;
    }
  }
  return ans;
};
