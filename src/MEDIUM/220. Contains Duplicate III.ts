// 04/17/2021 MEDIUM

// https://leetcode-cn.com/problems/contains-duplicate-iii/

/*
Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
 

Constraints:

0 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1 
 */
import { BST } from '../../utils/index'
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const bst = new BST<number>((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const lowerBound = bst.lowerBound(nums[i] - t);
    if (lowerBound !== undefined && lowerBound <= nums[i] + t) return true;
    bst.insert(nums[i]);
    if (i >= k) bst.delete(nums[i - k]);
  }
  return false;
};