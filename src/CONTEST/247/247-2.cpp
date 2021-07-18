//
// Created by 程子骞 on 2021/6/27.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
private:
  int dir[4][2] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
public:
  vector<vector<int>> rotateGrid(vector<vector<int>>& grid, int count) {
    int row = grid.size();
    int col = grid[0].size();
    int layer = min(row, col) / 2;
    vector<vector<int>> ans = grid;
    vector<vector<int>> tmp = grid;
    for (int k = 0; k < layer; ++k) {
      int curCount = count % ((row - k * 2) * 2 + (col - k * 2 - 2) * 2);
      for (int c = 0; c < curCount; ++c) {
        int i = k, j = k;
        int dirIndex = 0;
        while (true) {
          int nextI = i + dir[dirIndex][0];
          int nextJ = j + dir[dirIndex][1];
          if (nextI >= k && nextI <= k + row - k * 2 - 1 && nextJ >= k && nextJ <= k + col - k * 2 - 1) {
            ans[nextI][nextJ] = tmp[i][j];
            i = nextI;
            j = nextJ;
            if (i == k && j == k) break;
          } else {
            dirIndex = (dirIndex + 1) % 4;
          }
        }
        tmp = ans;
      }
    }
    return ans;
  }
};