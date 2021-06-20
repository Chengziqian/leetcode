//
// Created by ZiqianCheng on 2021/6/18.
//

// MEDIUM https://leetcode-cn.com/problems/wiggle-sort/

/*
 * Given an integer array nums, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

You may assume the input array always has a valid answer.

 

Example 1:

Input: nums = [3,5,2,1,6,4]
Output: [3,5,1,6,2,4]
Explanation: [1,6,2,5,3,4] is also accepted.
Example 2:

Input: nums = [6,6,5,6,3,8]
Output: [6,6,5,6,3,8]
 

Constraints:

1 <= nums.length <= 5 * 104
0 <= nums[i] <= 104
It is guaranteed that there will be an answer for the given input nums.
 

Follow up: Could you do it without sorting the array?

 */

#include <vector>
using namespace std;
class Solution {
public:
  void wiggleSort(vector<int>& nums) {
    if (nums.size() <= 1) return;
    bool flag = true;
    for (int i = 0; i + 1 < nums.size(); ++i) {
      if (flag && nums[i] > nums[i + 1] || !flag && nums[i] < nums[i + 1]) swap(nums[i], nums[i + 1]);
      flag = !flag;
    }
  }
};