//
// Created by ZiqianCheng on 2021/6/14.
//

// HARD https://leetcode-cn.com/problems/word-rectangle-lcci/

/*
 * Given a list of millions of words, design an algorithm to create the largest possible rectangle of letters such that every row forms a word (reading left to right) and every column forms a word (reading top to bottom). The words need not be chosen consecutively from the list but all rows must be the same length and all columns must be the same height.

If there are more than one answer, return any one of them. A word can be used more than once.

Example 1:

Input: ["this", "real", "hard", "trh", "hea", "iar", "sld"]
Output:
[
   "this",
   "real",
   "hard"
]
Example 2:

Input: ["aa"]
Output: ["aa","aa"]
Notes:

words.length <= 1000
words[i].length <= 100
It's guaranteed that all the words are randomly generated.

 */

#include <string>
#include <vector>
#include <map>
using namespace std;
struct TrieNode {
  TrieNode* children[26];
  bool isKey = false;
};
class Solution {
private:
  TrieNode* root = new TrieNode();
  vector<string> ans;
  int maxLen = 0;
  int maxSize = 0;
public:
  vector<string> maxRectangle(vector<string>& words) {
    map<int, vector<string>> record;
    for (auto& str: words) {
      insert(str);
      record[(int)str.size()].push_back(str);
      maxLen = max(maxLen, (int)str.size());
    }
    for (auto it = record.rbegin(); it != record.rend(); ++it) {
      if (maxSize / it->first >= maxLen) break;
      vector<string> path;
      vector<TrieNode*> pointers(it->first, root);
      dfs(it->second, path, pointers, it->first);
    }
    return ans;
  }

  void dfs(vector<string>& list, vector<string>& path, vector<TrieNode*>& pointers, int len) {
    if (len * maxLen <= maxSize || path.size() >= maxLen) return;
    for (int k = 0; k < list.size(); ++k) {
      vector<TrieNode*> nextPointers = pointers;
      if (check(nextPointers, list[k], len)) {
        path.push_back(list[k]);
        int keyCount = 0;
        for (auto &p: nextPointers) if (p->isKey) keyCount++;
        if (keyCount == len && maxSize < len * path.size()) {
          ans = path;
          maxSize = len * path.size();
        }
        dfs(list, path, nextPointers, len);
        path.pop_back();
      }
    }
  }

  bool check(vector<TrieNode*>& pointers, string& next, int len) {
    for (int i = 0; i < len; ++i) {
      int index = next[i] - 'a';
      if (!pointers[i]->children[index]) return false;
      pointers[i] = pointers[i]->children[index];
    }
    return true;
  }

  void insert(string& str) {
    TrieNode* p = root;
    for (auto c: str) {
      int index = c - 'a';
      if (!p->children[index]) p->children[index] = new TrieNode();
      p = p->children[index];
    }
    p->isKey = true;
  }
};