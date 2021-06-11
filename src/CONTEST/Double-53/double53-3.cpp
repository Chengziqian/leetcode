//
// Created by 程子骞 on 2021/5/29.
//

#include <vector>
#include <set>
using namespace std;
class Solution {
public:
  vector<int> getBiggestThree(vector<vector<int>>& grid) {
    set<int, greater<int>> value;
    int row = grid.size();
    int col = grid[0].size();
    int maxLen = min(row, col);
    vector<vector<int>> dir = {{1, 1}, {1, -1}, {-1, -1}, {-1, 1}};
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        for (int k = 1; k <= maxLen; ++k) {
          if (j - k + 1 < 0 || j + k - 1 >= col || i + 2 * k - 2 >= row) continue;
          if (k == 1) value.insert(grid[i][j]);
          else {
            int v = 0;
            int indexI = i, indexJ = j;
            for (int d = 0; d < 4; ++d) {
              for (int kk = 0; kk < k - 1; ++kk) {
                indexI += dir[d][0];
                indexJ += dir[d][1];
                v += grid[indexI][indexJ];
              }
            }
            value.insert(v);
          }
          if (value.size() > 3) value.erase(value.rbegin());
        }
      }
    }
    vector<int> ans(value.begin(), value.end());
    return ans;
  }
};