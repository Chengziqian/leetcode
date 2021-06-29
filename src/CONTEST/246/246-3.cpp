//
// Created by 程子骞 on 2021/6/20.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
private:
  int dir[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
public:
  int countSubIslands(vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
    int row = grid1.size();
    int col = grid1[0].size();
    vector<vector<bool>> vis(row, vector<bool>(col, false));
    int ans = 0;
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (grid1[i][j] == grid2[i][j] && grid1[i][j] == 1 && !vis[i][j]) {
          bool isSub = dfs(i, j, grid1, grid2, vis, row, col, true);
          if (isSub) ans++;
        }
      }
    }
    return ans;
  }

  bool dfs(int i, int j, vector<vector<int>>& grid1, vector<vector<int>>& grid2, vector<vector<bool>>& vis, int row, int col, bool isSub) {
    vis[i][j] = true;
    for (int k = 0; k < 4; ++k) {
      int nextI = i + dir[k][0];
      int nextJ = j + dir[k][1];
      if (nextI >= 0 && nextI < row && nextJ >= 0 && nextJ < col && grid2[nextI][nextJ] == 1 && !vis[nextI][nextJ]) {
        isSub = isSub && dfs(nextI, nextJ, grid1, grid2, vis, row, col, grid1[nextI][nextJ] == 1);
      }
    }
    return isSub;
  }
};