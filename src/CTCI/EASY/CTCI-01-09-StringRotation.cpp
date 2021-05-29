//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://leetcode-cn.com/problems/string-rotation-lcci/

/*
 * Given two strings, s1 and s2,
 * write code to check if s2 is a rotation of s1
 * (e.g.,"waterbottle" is a rotation of"erbottlewat").
 * Can you use only one call to the method that checks if one word is a substring of another?

Example 1:

Input: s1 = "waterbottle", s2 = "erbottlewat"
Output: True
Example 2:

Input: s1 = "aa", s2 = "aba"
Output: False
 

Note:

0 <= s1.length, s2.length <= 100000

 */

#include <string>
using namespace std;
class Solution {
public:
  bool isFlipedString(string s1, string s2) {
//    int n = s1.size();
//    if (s2.size() != n) return false;
//    if (s1 == s2) return true;
//    string cur = "";
//    for (int i = 0; i < n; ++i) {
//      cur += s1[i];
//      if (s1.substr(i + 1) + cur == s2) return true;
//    }
//    return false;
    return s1.size() == s2.size() && (s1 + s1).find(s2) != -1;
  }
};