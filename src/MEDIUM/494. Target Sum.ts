// 04/24/2021 MEDIUM

// https://leetcode-cn.com/problems/target-sum/

/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Example 2:

Input: nums = [1], target = 1
Output: 1
 

Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

*/

// function findTargetSumWays(nums: number[], target: number): number {
//   const sum = nums.reduce((a, b) => a + b, 0);
//   if (target > sum || (sum + target) % 2 !== 0) return 0;
//   const value = (sum + target) / 2;
//   const dp: number[][] = new Array(nums.length + 1);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(value + 1).fill(0);
//   }
//   dp[0][0] = 1;
//   for (let i = 1; i <= nums.length; i++) {
//     for (let j = 0; j <= value; j++) {
//       if (j >= nums[i - 1]) {
//         dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }
//   return dp[nums.length][value];
// };

function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (target > sum || (sum + target) % 2 !== 0) return 0;
  const value = (sum + target) / 2;
  const dp: number[] = new Array(value + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = value; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[value];
};