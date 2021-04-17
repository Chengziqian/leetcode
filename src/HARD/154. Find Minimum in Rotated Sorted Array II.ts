// 11/04/2020 HARD

// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:

Input: [1,3,5]
Output: 1
Example 2:

Input: [2,2,2,0,1]
Output: 0
Note:

This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why?

 */

// function findMin(nums: number[]): number {
//   let left = 0;
//   let right = nums.length - 1;
//   if (nums[left] < nums[right]) return nums[left]
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (left > 0 && nums[left] < nums[left - 1]) return nums[left];
//     if (nums[left] < nums[mid]) {
//       left = mid + 1;
//     } else if (nums[left] > nums[mid]) {
//       right = mid;
//     } else {
//       left++;
//     }
//   }
//   return nums[left];
// };

// function findMin(nums: number[]): number {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     const mid = (left + right) >> 1;
//     if (nums[mid] === nums[right]) right--;
//     else if (nums[mid] > nums[right]) left = mid + 1;
//     else right = mid;
//   }
//   return nums[left];
// };

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === nums[right]) right--;
    else if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};
