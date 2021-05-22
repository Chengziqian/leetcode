// 05/18/2021 EASY

// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

#include <vector>
using namespace std;
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
      vector<int> ans;
      int row = matrix.size();
      if (!row) return ans;
      int col = matrix[0].size();
      if (!col) return ans;
      int direction[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
      vector<vector<bool>> vis(row, vector<bool>(col, false));
      int idx = 0, i = 0, j = 0;
      for (int k = 0; k < row * col; ++k) {
        ans.push_back(matrix[i][j]);
        vis[i][j] = true;
        int ni = i + direction[idx][0], nj = j + direction[idx][1];
        if (ni < 0 || ni >= row || nj < 0 || nj >= col || vis[ni][nj]) {
          idx = (idx + 1) % 4;
        }
        ni = i + direction[idx][0];
        nj = j + direction[idx][1];
        i = ni;
        j = nj;
      }
      return ans;
    }
};