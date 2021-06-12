//
// Created by ZiqianCheng on 2021/6/11.
//

// HARD https://leetcode-cn.com/problems/missing-two-lcci/

/*
 *You are given an array with all the numbers from 1 to N appearing exactly once, except for two number that is missing. How can you find the missing number in O(N) time and 0(1) space?

You can return the missing numbers in any order.

Example 1:

Input: [1]
Output: [2,3]
Example 2:

Input: [2,3]
Output: [1,4]
Note:

nums.length <= 30000
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> missingTwo(vector<int>& nums) {
    int totalXor = 0;
    int arrXor = 0;
    int n = nums.size();
    for (int i = 1; i <= n + 2; ++i) totalXor ^= i;
    for (auto num: nums) arrXor ^= num;
    int aXorB = totalXor ^ arrXor;
    int div = 1;
    while (!(div & aXorB)) div <<= 1;
    int groupTotalA = 0, groupTotalB = 0, groupArrA = 0, groupArrB = 0;
    for (int i = 1; i <= n + 2; ++i) {
      if (i & div) groupArrA ^= i;
      else groupTotalB ^= i;
    }
    for (auto num: nums) {
      if (num & div) groupArrA ^= num;
      else groupArrB ^= num;
    }
    return { groupTotalA ^ groupArrA, groupTotalB ^ groupArrB };
  }
};