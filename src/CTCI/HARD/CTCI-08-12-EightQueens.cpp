//
// Created by ZiqianCheng on 2021/5/29.
//

// HARD https://leetcode-cn.com/problems/eight-queens-lcci/

/*
 * Write an algorithm to print all ways of arranging n queens on an n x n chess board so that none of them share the same row, column, or diagonal.
 * In this case, "diagonal" means all diagonals, not just the two that bisect the board.

Notes: This problem is a generalization of the original one in the book.

Example:

 Input: 4
 Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 Explanation: 4 queens has following two solutions
[
 [".Q..",  // solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> ans;
    vector<string> path(n, string(n, '.'));
    dfs(0, n, path, ans);
    return ans;
  }

  void dfs(int currentRow, int n, vector<string>& path, vector<vector<string>>& ans) {
    if (currentRow == n) {
      ans.push_back(path);
      return;
    }
    for (int j = 0; j < n; ++j) {
      bool isSkip = false;
      for (int i = 0; i < currentRow; ++i) {
        if (path[i][j] == 'Q') {
          isSkip = true;
          break;
        }
      }
      if (isSkip) continue;
      int di = currentRow - 1, dj = j - 1;
      while (di >= 0 && dj >= 0) {
        if (path[di--][dj--] == 'Q') {
          isSkip = true;
          break;
        }
      }
      if (isSkip) continue;
      di = currentRow - 1, dj = j + 1;
      while (di >= 0 && dj < n) {
        if (path[di--][dj++] == 'Q') {
          isSkip = true;
          break;
        }
      }
      if (isSkip) continue;
      path[currentRow][j] = 'Q';
      dfs(currentRow + 1, n, path, ans);
      path[currentRow][j] = '.';
    }
  }
};