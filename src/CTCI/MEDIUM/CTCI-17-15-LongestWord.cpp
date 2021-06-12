//
// Created by ZiqianCheng on 2021/6/9.
//

// MEDIUM https://leetcode-cn.com/problems/longest-word-lcci

/*
 * Given a list of words, write a program to find the longest word made of other words in the list.
 * If there are more than one answer, return the one that has smallest lexicographic order.
 * If no answer, return an empty string.

Example:

Input:  ["cat","banana","dog","nana","walk","walker","dogwalker"]
Output:  "dogwalker"
Explanation:  "dogwalker" can be made of "dog" and "walker".
Note:

0 <= len(words) <= 200
1 <= len(words[i]) <= 100
 *
 */

#include <string>
#include <vector>
#include <unordered_set>
using namespace std;
struct TrieNode {
  TrieNode* children[26] = {nullptr};
  bool isKey = false;
};
class Solution {
private:
  TrieNode* root = new TrieNode();
public:
  string longestWord(vector<string>& words) {
    auto cmp = [](const string& a, const string& b) {
      return a.size() == b.size() ? a < b : a.size() > b.size();
    };
    sort(words.begin(), words.end(), cmp);
    unordered_set<string> record;
    for (auto& str: words) {
      insert(str);
      record.insert(str);
    }
    for (auto& str: words) {
      if (str.empty()) continue;
      int n = str.size();
      vector<bool> dp(n, false);
      for (int i = 0; i < n; ++i) {
        if (i < n - 1) dp[i] = record.count(str.substr(0, i + 1)) != 0;
        if (dp[i]) continue;
        TrieNode* p = root;
        for (int k = i - 1; k >= 0; --k) {
          int queryIndex = str[k + 1] - 'a';
          if (!p->children[queryIndex]) {
            break;
          } else if (p->children[queryIndex]->isKey) {
            dp[i] = dp[k];
          }
          if (dp[i]) break;
          p = p->children[queryIndex];
        }
      }
      if (dp[n - 1]) return str;
    }
    return "";
  }

  void insert(string& str) {
    TrieNode* p = root;
    for (int i = str.size() - 1; i >= 0; --i) {
      if (!p->children[str[i] - 'a']) p->children[str[i] - 'a'] = new TrieNode();
      p = p->children[str[i] - 'a'];
    }
    p->isKey = true;
  }
};