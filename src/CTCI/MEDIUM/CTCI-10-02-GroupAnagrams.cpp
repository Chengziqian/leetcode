//
// Created by ZiqianCheng on 2021/5/31.
//

// MEDIUM https://leetcode-cn.com/problems/group-anagrams-lcci/

/*
 * Write a method to sort an array of strings so that all the anagrams are in the same group.

Note: This problem is slightly different from the original one the book.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Notes:

All inputs will be in lowercase.
The order of your output does not matter.

 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> record;
    for (auto str: strs) {
      vector<int> count(26, 0);
      for (auto c: str) count[c - 'a']++;
      string key = "";
      for (int i = 0; i < 26; ++i) {
        key.push_back(i + 'a');
        key += to_string(count[i]);
      }
      record[key].push_back(str);
    }
    vector<vector<string>> ans;
    for (auto p: record) ans.push_back(p.second);
    return ans;
  }
};