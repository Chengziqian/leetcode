//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/string-to-url-lcci/

/*
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 * (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

Example 1:

Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
Example 2:

Input: "               ", 5
Output: "%20%20%20%20%20"
 

Note:

0 <= S.length <= 500000

 */

#include <string>
using namespace std;
class Solution {
public:
  string replaceSpaces(string S, int length) {
    int n = S.size();
    int index = n - 1;
    for (int i = length - 1; i >= 0; --i) {
      if (S[i] == ' ') {
        S[index--] = '0';
        S[index--] = '2';
        S[index--] = '%';
      } else {
        S[index--] = S[i];
      }
    }
    return S.substr(index + 1);
  }
};