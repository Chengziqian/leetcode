//
// Created by 程子骞 on 2021/7/4.
//
// EASY https://leetcode-cn.com/problems/set-mismatch

/*
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

 */
#include <vector>
using namespace std;
class Solution {
public:
  vector<int> findErrorNums(vector<int>& nums) {
    int n = nums.size();
    vector<int> rc(n + 1, 0);
    vector<int> ans;
    for (auto num: nums) rc[num]++;
    for (int i = 1; i <= n; ++i) {
      if (rc[i] > 1) ans.push_back(i);
    }
    for (int i = 1; i <= n; ++i) {
      if (rc[i] == 0) ans.push_back(i);
    }
    return ans;
  }
};