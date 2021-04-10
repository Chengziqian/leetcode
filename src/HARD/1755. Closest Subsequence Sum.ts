// 03/25/2021 HARD

// https://leetcode-cn.com/problems/closest-subsequence-sum/

/*
You are given an integer array nums and an integer goal.

You want to choose a subsequence of nums such that the sum of its elements is the closest possible to goal. 
That is, if the sum of the subsequence's elements is sum, 
then you want to minimize the absolute difference abs(sum - goal).

Return the minimum possible value of abs(sum - goal).

Note that a subsequence of an array is an array formed by removing some elements (possibly all or none) of the original array.

 

Example 1:

Input: nums = [5,-7,3,5], goal = 6
Output: 0
Explanation: Choose the whole array as a subsequence, with a sum of 6.
This is equal to the goal, so the absolute difference is 0.
Example 2:

Input: nums = [7,-9,15,-2], goal = -5
Output: 1
Explanation: Choose the subsequence [7,-9,-2], with a sum of -4.
The absolute difference is abs(-4 - (-5)) = abs(1) = 1, which is the minimum.
Example 3:

Input: nums = [1,2,3], goal = -7
Output: 7
 

Constraints:

1 <= nums.length <= 40
-107 <= nums[i] <= 107
-109 <= goal <= 109

 */
function minAbsDifference(nums: number[], goal: number): number {
  const n = nums.length;
  const leftLen = n >> 1;
  const rightLen = n - leftLen;
  const leftMask = (1 << leftLen) - 1;
  const rightMask = (1 << rightLen) - 1;
  const list = [];
  for (let sub = 0; sub <= leftMask; sub++) {
    let sum = 0;
    for (let i = 0; i < leftLen; i++) {
      if (sub & (1 << i)) sum += nums[i];
    }
    list.push(sum);
  }
  list.sort((a, b) => a - b);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let sub = 0; sub <= rightMask; sub++) {
    let sum = 0;
    for (let i = 0; i < rightLen; i++) {
      if (sub & (1 << i)) sum += nums[i + leftLen];
    }
    let left = 0, right = list.length - 1;
    const target = goal - sum;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (list[mid] < target) left = mid + 1;
      else if (list[mid] > target) right = mid - 1;
      else return 0;
    }
    if (left >= list.length) ans = Math.min(ans, Math.abs(list[right] + sum - goal))
    else if (right < 0) ans = Math.min(ans, Math.abs(list[left] + sum - goal))
    else ans = Math.min(ans, Math.abs(list[right] + sum - goal),  Math.abs(list[left] + sum - goal))
  }
  return ans;
};
