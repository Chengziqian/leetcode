//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/permutation-ii-lcci/

/*
 * Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.

Example1:

 Input: S = "qqe"
 Output: ["eqq","qeq","qqe"]
Example2:

 Input: S = "ab"
 Output: ["ab", "ba"]
Note:

All characters are English letters.
1 <= S.length <= 9

 */
#include <vector>
#include <string>
#include <unordered_set>;
using namespace std;
class Solution {
public:
  vector<string> permutation(string S) {
    vector<string> ans;
    dfs(0, S, ans);
    return ans;
  }

  void dfs(int index, string& S, vector<string>& ans) {
    if (index == S.size()) {
      ans.push_back(S);
      return;
    }
    unordered_set<char> rc;
    for (int i = index; i < S.size(); ++i) {
      if (!rc.count(S[i])) {
        swap(S[i], S[index]);
        dfs(index + 1, S, ans);
        swap(S[i], S[index]);
      }
      rc.insert(S[i]);
    }
  }
};