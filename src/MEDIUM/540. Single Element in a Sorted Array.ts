// 11/19/2020 MEDIUM

// https://leetcode-cn.com/problems/single-element-in-a-sorted-array/

/*

You are given a sorted array consisting of only integers where every element appears exactly twice, 
except for one element which appears exactly once. 
Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^5

 */

function singleNonDuplicate(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
    if ((mid - left ) & 1) {
      if (nums[mid] != nums[mid - 1]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] === nums[mid - 1]) right = mid;
      else left = mid;
    }
  }
  return nums[left];
};
