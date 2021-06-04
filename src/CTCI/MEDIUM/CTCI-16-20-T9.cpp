//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/t9-lcci/

/*
 * On old cell phones, users typed on a numeric keypad and the phone would provide a list of words that matched these numbers.
 * Each digit mapped to a set of 0 - 4 letters. Implement an algorithm to return a list of matching words,
 * given a sequence of digits. You are provided a list of valid words. The mapping is shown in the diagram below:

Example 1:

Input: num = "8733", words = ["tree", "used"]
Output: ["tree", "used"]
Example 2:

Input: num = "2", words = ["a", "b", "c", "d"]
Output: ["a", "b", "c"]
Note:

num.length <= 1000
words.length <= 500
words[i].length == num.length
There are no number 0 and 1 in num.
 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  vector<string> getValidT9Words(string num, vector<string>& words) {
    int charMapIndex[26];
    for (int i = 0; i < 26; ++i) {
      if (i <= 2) charMapIndex[i] = 2;
      else if (i <= 5) charMapIndex[i] = 3;
      else if (i <= 8) charMapIndex[i] = 4;
      else if (i <= 11) charMapIndex[i] = 5;
      else if (i <= 14) charMapIndex[i] = 6;
      else if (i <= 18) charMapIndex[i] = 7;
      else if (i <= 21) charMapIndex[i] = 8;
      else charMapIndex[i] = 9;
    }
    vector<string> ans;
    for (int i = 0; i < words.size(); ++i) {
      if (words[i].size() != num.size()) continue;
      string numStr;
      int j = 0;
      for (; j < num.size(); ++j) {
        if (charMapIndex[words[i][j] - 'a'] != num[j] - '0') break;
      }
      if (j == num.size()) ans.push_back(words[i]);
    }
    return ans;
  }
};