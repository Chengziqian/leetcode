// 05/17/2021 MEDIUM

// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/

#include <vector>
#include <string>
using namespace std;
class Solution {
  private:
    int direction[4][2] = {{1, 0}, {-1, 0}, {0, -1}, {0, 1}};
    int row = 0;
    int col = 0;
  public:
    bool exist(vector<vector<char>>& board, string word) {
      row = board.size();
      col = board[0].size();
      vector<vector<bool>> vis(row, vector<bool>(col, false));
      for (int i = 0; i < row; ++i) {
        for (int j = 0; j < col; ++j) {
          if (dfs(board, i, j, word, 0, vis)) return true;
        }
      }
      return false;
    }

    bool dfs(vector<vector<char>>& board, int i, int j, string word, int index, vector<vector<bool>>& vis) {
      if (index == word.size() - 1 && board[i][j] == word[index]) return true;
      if (board[i][j] != word[index]) return false;
      vis[i][j] = true;
      for (int k = 0; k < 4; ++k) {
        int ni = i + direction[k][0];
        int nj = j + direction[k][1];
        if (ni < 0 || ni >= row || nj < 0 || nj >= col || vis[ni][nj]) continue;
        if (dfs(board, ni, nj, word, index + 1, vis)) return true;
      }
      vis[i][j] = false;
      return false;
    }
};