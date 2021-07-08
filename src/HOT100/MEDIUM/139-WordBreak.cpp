//
// Created by ZiqianCheng on 2021/7/7.
//

// MEDIUM https://leetcode-cn.com/problems/word-break/submissions/

/*
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

 */

#include <string>
#include <vector>
#include <unordered_set>
using namespace std;
class Solution {
private:
  int memo[301];
public:
  bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dic;
    for (auto& str: wordDict) dic.insert(str);
    memset(memo, -1, sizeof memo);
    return dfs(0, s, dic);
  }

  bool dfs(int index, string& s, unordered_set<string>& dic) {
    if (index == s.size()) return true;
    if (memo[index] != -1) return memo[index];
    string slice;
    for (int i = index; i < s.size(); ++i) {
      slice.push_back(s[i]);
      if (dic.count(slice)) {
        if (dfs(i + 1, s, dic)) {
          return memo[index] = true;
        }
      }
    }
    return memo[index] = false;
  }
};