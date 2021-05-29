//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://seller.test.shopee.tw/portal/product/3400159473/

/*
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed" string would not become smaller than the original string,
 * your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).

Example 1:

Input: "aabcccccaaa"
Output: "a2b1c5a3"
Example 2:

Input: "abbccd"
Output: "abbccd"
Explanation:
The compressed string is "a1b2c2d1", which is longer than the original string.
 

Note:

0 <= S.length <= 50000

 */

#include <string>
using namespace std;
class Solution {
public:
  string compressString(string S) {
    if (!S.size()) return S;
    string newString = "";
    char curChar = S[0];
    int curCount = 1;
    for (int i = 1; i < S.size(); ++i) {
      if (curChar != S[i]) {
        newString += curChar;
        newString += to_string(curCount);
        curChar = S[i];
        curCount = 1;
      } else {
        curCount++;
      }
    }
    newString += curChar;
    newString += to_string(curCount);
    return newString.size() < S.size() ? newString : S;
  }
};