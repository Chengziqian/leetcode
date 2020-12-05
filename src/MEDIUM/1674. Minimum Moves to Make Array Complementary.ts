// 11/30/2020 MEDIUM

// https://leetcode-cn.com/problems/minimum-moves-to-make-array-complementary/

/*
You are given an integer array nums of even length n and an integer limit. In one move, you can replace any integer from nums with another integer between 1 and limit, inclusive.

The array nums is complementary if for all indices i (0-indexed), nums[i] + nums[n - 1 - i] equals the same number. For example, the array [1,2,3,4] is complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5.

Return the minimum number of moves required to make nums complementary.

 

Example 1:

Input: nums = [1,2,4,3], limit = 4
Output: 1
Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements are changed).
nums[0] + nums[3] = 1 + 3 = 4.
nums[1] + nums[2] = 2 + 2 = 4.
nums[2] + nums[1] = 2 + 2 = 4.
nums[3] + nums[0] = 3 + 1 = 4.
Therefore, nums[i] + nums[n-1-i] = 4 for every i, so nums is complementary.
Example 2:

Input: nums = [1,2,2,1], limit = 2
Output: 2
Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change any number to 3 since 3 > limit.
Example 3:

Input: nums = [1,2,1,2], limit = 2
Output: 0
Explanation: nums is already complementary.
 

Constraints:

n == nums.length
2 <= n <= 105
1 <= nums[i] <= limit <= 105
n is even.

 */

function minMoves(nums: number[], limit: number): number {
  const diff: number[] = new Array(2 * limit + 2).fill(0);
  for (let i = 0; i < (nums.length >> 1); i++) {
    const A = nums[i], B = nums[nums.length - i - 1];
    let left = 2, right = 2 * limit;
    diff[left] += 2; diff[right + 1] -= 2;
    left = 1 + Math.min(A, B); right = limit + Math.max(A, B);
    diff[left] += -1; diff[right + 1] -= -1;
    left = A + B; right = A + B;
    diff[left] += -1; diff[right + 1] -= -1;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 2; i <= 2 * limit; i++) {
    sum += diff[i];
    ans = Math.min(ans, sum);
  }
  return ans;
};
