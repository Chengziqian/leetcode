//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  string reverseWords(string s) {
    vector<string> wordList;
    string cur = "";
    for (auto c: s) {
      if (c == ' ') {
        if (cur.size()) wordList.push_back(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
    if (cur.size()) wordList.push_back(cur);
    string ans = "";
    for (auto str: wordList) ans = str + " " + ans;
    return ans.substr(0, ans.size() - 1);
  }
};