//
// Created by ZiqianCheng on 2021/5/28.
//

// EASY https://leetcode-cn.com/problems/magic-index-lcci/

/*
 * A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.
 * Given a sorted array of integers, write a method to find a magic index, if one exists, in array A.
 * If not, return -1. If there are more than one magic index, return the smallest one.

Example1:

 Input: nums = [0, 2, 3, 4, 5]
 Output: 0
Example2:

 Input: nums = [1, 1, 1]
 Output: 1
Note:

1 <= nums.length <= 1000000
This problem is the follow-up of the original problem in the book, i.e. the values are not distinct.

 */
#include <vector>
using namespace std;
class Solution {
public:
  int findMagicIndex(vector<int>& nums) {
    return help(nums, 0, nums.size() - 1);
  }

  int help(vector<int>& nums, int left, int right) {
    if (left > right) return -1;
    int mid = (left + right) / 2;
    int leftValue = help(nums, left, mid - 1);
    if (leftValue == - 1) {
      if (nums[mid] == mid) return mid;
      else return help(nums, mid + 1, right);
    } else {
      return leftValue;
    }
  }
};