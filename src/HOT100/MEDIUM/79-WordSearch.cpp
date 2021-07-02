//
// Created by ZiqianCheng on 2021/6/30.
//

// MEDIUM https://leetcode-cn.com/problems/word-search/

/*
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
private:
  int dir[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
public:
  bool exist(vector<vector<char>>& board, string word) {
    int row = board.size();
    int col = board[0].size();
    vector<vector<bool>> vis(row, vector<bool>(col, false));
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (dfs(i, j, 0, word, board, row, col, vis)) return true;
      }
    }
    return false;
  }

  bool dfs(int i, int j, int index, string& word, vector<vector<char>>& board, int row, int col, vector<vector<bool>>& vis) {
    if (board[i][j] != word[index]) return false;
    if (board[i][j] == word[index] && index == word.size() - 1) return true;
    vis[i][j] = true;
    for (int k = 0; k < 4; ++k) {
      int nextI = i + dir[k][0];
      int nextJ = j + dir[k][1];
      if (nextI >= 0 && nextI < row && nextJ >= 0 && nextJ < col && !vis[nextI][nextJ]) {
        if (dfs(nextI, nextJ, index + 1, word, board, row, col, vis)) return true;
      }
    }
    vis[i][j] = false;
    return false;
  }
};