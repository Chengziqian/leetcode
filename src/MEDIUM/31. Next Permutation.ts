// 11/10/2020 MEDIUM

// https://leetcode-cn.com/problems/next-permutation/

/*

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

 */
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return;
  let currentMaxIndex = nums.length - 1;
  let i = nums.length - 2;
  for (; i >= 0; i--) {
    if (nums[i] >= nums[currentMaxIndex]) {
      currentMaxIndex = i;
    } else {
      let swapIndex = currentMaxIndex - 1;
      while (swapIndex + 1 < nums.length && nums[i] < nums[swapIndex + 1]) swapIndex++;
      [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
      break;
    }
  }
  let left = currentMaxIndex;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return;
};
