// 01/22/2021 EASY

// https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array

/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

 */

function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] *= -1
    }
  }
  const ans: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      ans.push(i);
    }
  }
  return ans;
};
