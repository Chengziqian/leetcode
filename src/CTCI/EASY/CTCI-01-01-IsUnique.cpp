//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/is-unique-lcci/

/*
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?

Example 1:

Input: s = "leetcode"
Output: false
Example 2:

Input: s = "abc"
Output: true
 

Note:

0 <= len(s) <= 100

 */
#include <string>
using namespace std;
class Solution {
public:
  bool isUnique(string astr) {
    int n = astr.size();
    int mask = 0;
    for (int i = 0; i < n; ++i) {
      if (mask & (1 << (astr[i] - 'a'))) return false;
      mask |= 1 << (astr[i] - 'a');
    }
    return true;
  }
};