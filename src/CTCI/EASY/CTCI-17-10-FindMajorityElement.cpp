//
// Created by ZiqianCheng on 2021/6/7.
//

// EASY https://leetcode-cn.com/problems/find-majority-element-lcci

/*
 * A majority element is an element that makes up more than half of the items in an array.
 * Given a positive integers array, find the majority element. If there is no majority element, return -1.
 * Do this in O(N) time and O(1) space.

Example 1:

Input: [1,2,5,9,5,9,5,5,5]
Output: 5
 

Example 2:

Input: [3,2]
Output: -1
 

Example 3:

Input: [2,2,1,1,1,2,2]
Output: 2

 */
#include <vector>
using namespace std;
class Solution {
public:
  int majorityElement(vector<int>& nums) {
    int count = 0;
    int current = -1;
    for (int i = 0; i < nums.size(); ++i) {
      if (count == 0) {
        current = nums[i];
        count++;
      } else {
        if (current == nums[i]) count++;
        else count--;
      }
    }
    int c = 0;
    for (auto n: nums) {
      if (n == current) c++;
      if (c > nums.size() / 2) return current;
    }
    return -1;
  }
};