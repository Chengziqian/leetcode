// 05/12/2021 EASY

// https://leetcode-cn.com/problems/factorial-trailing-zeroes/

/*
Given an integer n, return the number of trailing zeroes in n!.

Follow up: Could you write a solution that works in logarithmic time complexity?

 

Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Example 3:

Input: n = 0
Output: 0
 

Constraints:

0 <= n <= 104

*/
#include <algorithm>
using namespace std;
class Solution {
public:
    int trailingZeroes(int n) {
      int twoCount = 0;
      int fiveCount = 0;
      for (int i = 1; i <= n; i++) {
        if (i % 2 == 0) {
          int d = i;
          while (d % 2 == 0) {
            d = d / 2;
            twoCount++;
          }
        }
        if (i % 5 == 0) {
          int d = i;
          while (d % 5 == 0) {
            d = d / 5;
            fiveCount++;
          }
        }
      }
      return min(twoCount, fiveCount);
    }
};