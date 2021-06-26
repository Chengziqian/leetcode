//
// Created by ZiqianCheng on 2021/6/22.
//

// MEDIUM https://leetcode-cn.com/problems/group-anagrams/

/*
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> rc;
    for (auto& str: strs) {
      vector<int> count(26, 0);
      for (auto c: str) count[c - 'a']++;
      string key;
      for (int i = 0; i < 26; ++i) {
        if (count[i] != 0) {
          key.push_back('a' + i);
          key += to_string(count[i]);
        }
      }
      rc[key].push_back(str);
    }
    vector<vector<string>> ans;
    for (auto &p: rc) ans.push_back(p.second);
    return ans;
  }
};