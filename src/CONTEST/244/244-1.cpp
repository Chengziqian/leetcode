//
// Created by 程子骞 on 2021/6/6.
//

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
    for (int i = 0; i < 3; ++i) {
      if (isEqual(mat, target)) return true;
      mat = rotate(mat);
    }
    return false;
  }

  vector<vector<int>> rotate(vector<vector<int>>& mat) {
    int n = mat.size();
    vector<vector<int>> ans(n, vector<int>(n, 0));
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        ans[j][n - 1 - i] = mat[i][j];
      }
    }
    return ans;
  }

  bool isEqual(vector<vector<int>>& mat, vector<vector<int>>& target) {
    int n = mat.size();
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        if (mat[i][j] != target[i][j]) return false;
      }
    }
    return true;
  }
};