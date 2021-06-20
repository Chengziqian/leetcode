//
// Created by ZiqianCheng on 2021/6/19.
//

// MEDIUM https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

/*
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  vector<string> letterCombinations(string digits) {
    unordered_map<char, vector<char>> record = {
      {'2', vector<char>{'a', 'b', 'c'}},
      {'3', vector<char>{'d', 'e', 'f'}},
      {'4', vector<char>{'g', 'h', 'i'}},
      {'5', vector<char>{'j', 'k', 'l'}},
      {'6', vector<char>{'m', 'n', 'o'}},
      {'7', vector<char>{'p', 'q', 'r', 's'}},
      {'8', vector<char>{'t', 'u', 'v'}},
      {'9', vector<char>{'w', 'x', 'y', 'z'}},
    };
    vector<string> ans;
    if (digits.empty()) return ans;
    string path = "";
    dfs(0, path, digits, record, ans);
    return ans;
  }

  void dfs(int index, string& path, string& digits, unordered_map<char, vector<char>>& record, vector<string>& ans) {
    if (index == digits.size()) {
      ans.push_back(path);
      return;
    }
    for (auto letter: record[digits[index]]) {
      path.push_back(letter);
      dfs(index + 1, path, digits, record, ans);
      path.pop_back();
    }
  }
};