// 05/17/2021 MEDIUM

// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/


#include <vector>
using namespace std;
class Solution {
  public:
    bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
      int row = matrix.size();
      if (row == 0) return false;
      int col = matrix[0].size();
      if (col == 0) return false;
      int i = 0, j = col - 1;
      while (i < row && j >= 0) {
        if (matrix[i][j] == target) return true;
        else if (matrix[i][j] > target) j--;
        else i++;
      }
      return false;
    }
};