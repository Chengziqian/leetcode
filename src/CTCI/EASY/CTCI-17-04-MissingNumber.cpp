//
// Created by ZiqianCheng on 2021/6/5.
//

// EASY https://leetcode-cn.com/problems/missing-number-lcci

/*
 * An array contains all the integers from 0 to n,
 * except for one number which is missing.
 * Write code to find the missing integer.
 * Can you do it in O(n) time?

Note: This problem is slightly different from the original one the book.

Example 1:

Input: [3,0,1]
Output: 2
 

Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

 */

#include <vector>
using namespace std;
class Solution {
public:
  int missingNumber(vector<int>& nums) {
    int sum = 0;
    for (int n: nums) sum += n;
    int total = (1 + nums.size()) * nums.size() / 2;
    return total - sum;
  }
};