//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/permutation-i-lcci/

/*
 * Write a method to compute all permutations of a string of unique characters.

Example1:

 Input: S = "qwe"
 Output: ["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
Example2:

 Input: S = "ab"
 Output: ["ab", "ba"]
Note:

All charaters are English letters.
1 <= S.length <= 9

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  vector<string> permutation(string S) {
    int n = S.size();
//    vector<bool> vis(n, false);
    vector<string> ans;
//    string path = "";
//    dfs(0, S, vis, path, ans);
    dfs2(0, S, ans);
    return ans;
  }

  void dfs(int len, string& S, vector<bool>& vis, string& path, vector<string>& ans) {
    if (len == S.size()) {
      ans.push_back(path);
      return;
    }
    for (int i = 0; i < S.size(); ++i) {
      if (!vis[i]) {
        path.push_back(S[i]);
        vis[i] = true;
        dfs(len + 1, S, vis, path, ans);
        path.pop_back();
        vis[i] = false;
      }
    }
  }

  void dfs2(int index, string& S, vector<string>& ans) {
    if (index == S.size()) {
      ans.push_back(S);
      return;
    }
    for (int i = index; i < S.size(); ++i) {
      swap(S[index], S[i]);
      dfs2(index + 1, S, ans);
      swap(S[index], S[i]);
    }
  }
};