//
// Created by ZiqianCheng on 2021/6/21.
//

// MEDIUM https://leetcode-cn.com/problems/next-permutation/

/*
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

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

#include <vector>
using namespace std;
class Solution {
public:
  void nextPermutation(vector<int>& nums) {
    int index = nums.size() - 1;
    while (index >= 1 && nums[index - 1] >= nums[index]) index--;
    if (index > 0) {
      int left = index, right = nums.size() - 1;
      int pivot = nums[index - 1];
      while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] <= pivot) right = mid - 1;
        else left = mid + 1;
      }
      swap(nums[index - 1], nums[right]);
    }
    sort(nums.begin() + index, nums.end());
    return;
  }
};