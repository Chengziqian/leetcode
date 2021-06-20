//
// Created by ZiqianCheng on 2021/6/19.
//

// MEDIUM https://leetcode-cn.com/problems/generate-parentheses/

/*
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
 */

#include <vector>
#include <string>
using namespace std;
class Solution {
private:
  vector<string> ans;
public:
  vector<string> generateParenthesis(int n) {
    string path = "";
    dfs(0, 0, path, n);
    return ans;
  }

  void dfs(int left, int right, string& path, int n) {
    if (left == right && left == n) {
      ans.push_back(path);
      return;
    }
    if (left > n || right > left) return;
    path.push_back('(');
    dfs(left + 1, right, path, n);
    path.pop_back();
    path.push_back(')');
    dfs(left, right + 1, path, n);
    path.pop_back();
  }
};