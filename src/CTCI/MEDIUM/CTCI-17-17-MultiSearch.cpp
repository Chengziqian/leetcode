//
// Created by ZiqianCheng on 2021/6/10.
//

// MEDIUM https://leetcode-cn.com/problems/multi-search-lcci

/*
 * Given a string band an array of smaller strings T, design a method to search b for each small string in T.
 * Output positions of all strings in smalls that appear in big,
 * where positions[i] is all positions of smalls[i].

Example:

Input:
big = "mississippi"
smalls = ["is","ppi","hi","sis","i","ssippi"]
Output:  [[1,4],[8],[],[3],[1,4,7,10],[5]]
Note:

0 <= len(big) <= 1000
0 <= len(smalls[i]) <= 1000
The total number of characters in smalls will not exceed 100000.
No duplicated strings in smalls.
All characters are lowercase letters.

 */

#include <vector>
#include <string>
using namespace std;
struct TrieNode {
  TrieNode* children[26] = {nullptr};
  bool isKey = false;
  int index = 0;
};
class Solution {
private:
  TrieNode* root = new TrieNode();
public:
  vector<vector<int>> multiSearch(string big, vector<string>& smalls) {
    for (int i = 0; i < smalls.size(); ++i) insert(smalls[i], i);
    int n = big.size();
    vector<vector<int>> ans(smalls.size(), vector<int>());
    for (int i = 0; i < n; ++i) {
      TrieNode* p = root;
      for (int j = i; j < n; ++j) {
        int index = big[j] - 'a';
        if (!p->children[index]) break;
        else {
          if (p->children[index]->isKey) {
            ans[p->children[index]->index].push_back(i);
          }
        }
        p = p->children[index];
      }
    }
    return ans;
  }

  void insert(string& str, int index) {
    TrieNode* p = root;
    for (auto c: str) {
      int index = c - 'a';
      if (!p->children[index]) p->children[index] = new TrieNode();
      p = p->children[index];
    }
    p->isKey = true;
    p->index = index;
  }
};