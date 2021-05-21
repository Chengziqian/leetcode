//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  int maxValue(vector<vector<int>>& grid) {
    int row = grid.size();
    if (!row) return 0;
    int col = grid[0].size();
    vector<vector<int>> dp(row, vector<int>(col, 0));
    dp[0][0] = grid[0][0];
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (i == 0 && j > 0) dp[i][j] = dp[i][j - 1] + grid[i][j];
        else if (j == 0 && i > 0) dp[i][j] = dp[i - 1][j] + grid[i][j];
        else if (j > 0 && i > 0) dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
    return dp[row - 1][col - 1];
  }
};