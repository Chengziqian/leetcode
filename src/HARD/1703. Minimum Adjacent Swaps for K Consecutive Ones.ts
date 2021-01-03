// 1/1/2021 HARD

//  https://leetcode-cn.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/

/*
You are given an integer array, nums, and an integer k. nums comprises of only 0's and 1's. In one move, you can choose two adjacent indices and swap their values.

Return the minimum number of moves required so that nums has k consecutive 1's.

 

Example 1:

Input: nums = [1,0,0,1,0,1], k = 2
Output: 1
Explanation: In 1 move, nums could be [1,0,0,0,1,1] and have 2 consecutive 1's.
Example 2:

Input: nums = [1,0,0,0,0,0,1,1], k = 3
Output: 5
Explanation: In 5 moves, the leftmost 1 can be shifted right until nums = [0,0,0,0,0,1,1,1].
Example 3:

Input: nums = [1,1,0,1], k = 2
Output: 0
Explanation: nums already has 2 consecutive 1's.
 

Constraints:

1 <= nums.length <= 105
nums[i] is 0 or 1.
1 <= k <= sum(nums)

*/

function minMoves(nums: number[], k: number): number {
  if (k === 1) return 0;
  const list: number[] = [];
  const sum: number[] = [0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      list.push(i - list.length);
      sum.push(list[list.length - 1] + sum[sum.length - 1]);
    }
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i + k <= list.length; i++) {
    const midIndex = (i + i + k - 1) >> 1;
    const mid = list[midIndex];
    ans = Math.min(ans, (2 * (midIndex - i) - k + 1) * mid + (sum[i + k] - sum[midIndex + 1]) - (sum[midIndex] - sum[i]))
  }
  return ans;
};