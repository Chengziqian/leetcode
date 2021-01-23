// 01/16/2021 HARD

// https://leetcode-cn.com/problems/split-array-largest-sum/

/*
Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.

 

Example 1:

Input: nums = [7,2,5,10,8], m = 2
Output: 18
Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
Example 2:

Input: nums = [1,2,3,4,5], m = 2
Output: 9
Example 3:

Input: nums = [1,4,4], m = 3
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 106
1 <= m <= min(50, nums.length)

*/

// function splitArray(nums: number[], m: number): number {
//   const sum: number[] = new Array(nums.length + 1).fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     sum[i + 1] = sum[i] + nums[i];
//   }

//   const dp: number[][] = new Array(nums.length + 1);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(m + 1).fill(Number.MAX_SAFE_INTEGER);
//   }

//   dp[0][0] = 0;

//   for (let i = 1; i <= nums.length; i++) {
//     for (let j = 1; j <= Math.min(i, m); j++) {
//       for (let k = 0; k < i; k++) {
//         dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sum[i] - sum[k]))
//       }
//     }
//   }

//   return dp[nums.length][m];
// };

function splitArray(nums: number[], m: number): number {
  let left = Math.max(...nums);
  let right = nums.reduce((pre, cur) => pre + cur, 0);

  while (left <= right) {
    const mid = (left + right) >> 1;
    let count = 1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > mid) {
        count++;
        sum = nums[i];
      } else {
        sum += nums[i];
      }
    }

    if (count <= m) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};