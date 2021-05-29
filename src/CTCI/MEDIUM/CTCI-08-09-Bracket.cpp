//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/bracket-lcci/

/*
 * Implement an algorithm to print all valid (e.g., properly opened and closed) combinations of n pairs of parentheses.

Note: The result set should not contain duplicated subsets.

For example, given n = 3, the result should be:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  vector<string> generateParenthesis(int n) {
    string path = "";
    vector<string> ans;
    dfs(0, n, 0, 0, path, ans);
    return ans;
  }

  void dfs(int index, int n, int left, int right, string& path, vector<string>& ans) {
    if (index == n * 2) {
      ans.push_back(path);
      return;
    }
    if (left < n) {
      path.push_back('(');
      dfs(index + 1, n, left + 1, right, path, ans);
      path.pop_back();
    }
    if (left > right) {
      path.push_back(')');
      dfs(index + 1, n, left, right + 1, path, ans);
      path.pop_back();
    }
  }
};