// 05/10/2021 HARD

// https://leetcode-cn.com/problems/reverse-subarray-to-maximize-array-value

/*
You are given an integer array nums. 
The value of this array is defined as the sum of |nums[i]-nums[i+1]| for all 0 <= i < nums.length-1.

You are allowed to select any subarray of the given array and reverse it. 
You can perform this operation only once.

Find maximum possible value of the final array.

 

Example 1:

Input: nums = [2,3,1,5,4]
Output: 10
Explanation: By reversing the subarray [3,1,5] the array becomes [2,5,1,3,4] whose value is 10.
Example 2:

Input: nums = [2,4,9,24,2,1,10]
Output: 68
 

Constraints:

1 <= nums.length <= 3*10^4
-10^5 <= nums[i] <= 10^5
 */

function maxValueAfterReverse(nums: number[]): number {
  let origin = 0;
  for (let i = 0; i + 1 < nums.length; i++) {
    origin += Math.abs(nums[i] - nums[i + 1]);
  }
  const f = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < nums.length - 1; i++) {
    ans = Math.max(ans, origin + Math.abs(nums[i + 1] - nums[0]) - Math.abs(nums[i + 1] - nums[i]));
  }
  for (let i = 1; i < nums.length - 1; i++) {
    ans = Math.max(ans, origin + Math.abs(nums[nums.length - 1] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1]));
  }
  for (let k = 0; k < f.length; k++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i + 1 < nums.length; i++) {
      ans = Math.max(ans, origin + max + f[k][0] * nums[i] + f[k][1] * nums[i + 1] - Math.abs(nums[i] - nums[i + 1]));
      max = Math.max(max, -f[k][0] * nums[i] - f[k][1] * nums[i + 1] - Math.abs(nums[i] - nums[i + 1]));
    }
  }
  return ans;
};
