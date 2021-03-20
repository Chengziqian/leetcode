// 03/16/2021 HARD

// https://leetcode-cn.com/problems/maximum-score-of-a-good-subarray/

/*
You are given an array of integers nums (0-indexed) and an integer k.

The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1). A good subarray is a subarray where i <= k <= j.

Return the maximum possible score of a good subarray.

 

Example 1:

Input: nums = [1,4,3,7,4,5], k = 3
Output: 15
Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15. 
Example 2:

Input: nums = [5,5,4,5,4,1,1,1], k = 0
Output: 20
Explanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 2 * 104
0 <= k < nums.length

 */

function maximumScore(nums: number[], k: number): number {
  nums.unshift(0);
  nums.push(0);
  const stack: number[] = [];
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const min = nums[stack.pop()];
      const left = stack[stack.length - 1] + 1;
      const right = i - 1;
      if (k + 1 >= left && k + 1 <= right) {
        ans = Math.max(ans, min * (right - left + 1));
      }
    }
    stack.push(i);
  }
  return ans;
};
