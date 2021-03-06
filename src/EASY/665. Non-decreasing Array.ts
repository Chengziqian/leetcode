// 02/07/2021 EASY

// https://leetcode-cn.com/problems/non-decreasing-array/

/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
 

Constraints:

n == nums.length
1 <= n <= 104
-105 <= nums[i] <= 105
 */

function checkPossibility(nums: number[]): boolean {
  let count = 0;
  let index = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      index = i;
    }
  }
  // 找到至多一个长度为2的递减区间
  return count <= 1 && (index === 0 
      // 区间在数组开始或结束位置可以直接修改，否则要判断区间前后的数字是否满足需求
    || index + 1 === nums.length - 1 
      // 修改index位置使其变小 -> 那么index前后两个值必须满足非递减
    || nums[index - 1] <= nums[index + 1]
    // 修改index + 1位置使其变大 -> 那么index + 1前后两个值必须满足非递减
    || nums[index] <= nums[index + 2]
  );
};
