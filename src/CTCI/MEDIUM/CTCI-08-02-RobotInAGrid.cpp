//
// Created by ZiqianCheng on 2021/5/28.
//

// MEDIUM https://leetcode-cn.com/problems/robot-in-a-grid-lcci/

/*
 * Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
 * The robot can only move in two directions, right and down,
 * but certain cells are "off limits" such that the robot cannot step on them.
 * Design an algorithm to find a path for the robot from the top left to the bottom right.



"off limits" and empty grid are represented by 1 and 0 respectively.

Return a valid path, consisting of row number and column number of grids in the path.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: [[0,0],[0,1],[0,2],[1,2],[2,2]]
Note:

r, c <= 100
[[0,0],[0,1],[1,2],[2,2]]
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<vector<int>> pathWithObstacles(vector<vector<int>>& obstacleGrid) {
    vector<vector<int>> ans;
    int row = obstacleGrid.size();
    if (!row) return ans;
    int col = obstacleGrid[0].size();
    if (!col) return ans;
    vector<vector<pair<int, int>>> dp(row, vector<pair<int, int>>(col));
    if (obstacleGrid[0][0] == 1) return ans;
    dp[0][0] = make_pair(0, 0);
    for (int i = 1; i < row; ++i) {
      if (obstacleGrid[i][0] == 1 || dp[i - 1][0].first == -1) dp[i][0] = make_pair(-1, -1);
      else dp[i][0] = make_pair(i - 1, 0);
    }
    for (int j = 1; j < col; ++j) {
      if (obstacleGrid[0][j] == 1 || dp[0][j - 1].first == -1) dp[0][j] = make_pair(-1, -1);
      else dp[0][j] = make_pair(0, j - 1);
    }
    for (int i = 1; i < row; ++i) {
      for (int j = 1; j < col; ++j) {
        if (obstacleGrid[i][j] == 1) dp[i][j] = make_pair(-1, -1);
        else if (dp[i - 1][j].first != -1) dp[i][j] = make_pair(i - 1, j);
        else if (dp[i][j - 1].first != -1) dp[i][j] = make_pair(i, j - 1);
        else dp[i][j] = make_pair(-1, -1);
        cout << i << " " << j << " " << dp[i][j].first << " " << dp[i][j].second << endl;
      }
    }
    int i = row - 1, j = col - 1;
    if (dp[i][j].first == -1) return ans;
    while (i != 0 || j != 0) {
      ans.push_back({i, j});
      pair<int, int> nextStep = dp[i][j];
      i = nextStep.first;
      j = nextStep.second;
    }
    ans.push_back({0, 0});
    reverse(ans.begin(), ans.end());
    return ans;
  }
};
