//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/check-permutation-lcci/

/*
 * Given two strings,write a method to decide if one is a permutation of the other.

Example 1:

Input: s1 = "abc", s2 = "bca"
Output: true
Example 2:

Input: s1 = "abc", s2 = "bad"
Output: false
Note:

0 <= len(s1) <= 100
0 <= len(s2) <= 100

 */

#include <string>
using namespace std;
class Solution {
public:
  bool CheckPermutation(string s1, string s2) {
    vector<int> count(26, 0);
    for (auto c: s1) count[c - 'a']++;
    for (auto c: s2) count[c - 'a']--;
    for (auto c: count) if (c) return false;
    return true;
  }
};