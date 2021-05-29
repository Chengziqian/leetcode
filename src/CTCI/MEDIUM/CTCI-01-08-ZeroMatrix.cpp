//
// Created by ZiqianCheng on 2021/5/25.
//

// MEDIUM https://leetcode-cn.com/problems/zero-matrix-lcci/

/*
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

 

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

 */

#include <vector>
using namespace std;
class Solution {
public:
  void setZeroes(vector<vector<int>>& matrix) {
    bool needZeroFirstRow = false;
    bool needZeroFirstCol = false;
    int row = matrix.size();
    if (!row) return;
    int col = matrix[0].size();
    if (!col) return;
    for (int i = 0; i < row; ++i) {
      if (matrix[i][0] == 0) needZeroFirstCol = true;
    }
    for (int j = 0; j < col; ++j) {
      if (matrix[0][j] == 0) needZeroFirstRow = true;
    }
    for (int i = 1; i < row; ++i) {
      for (int j = 1; j < col; ++j) {
        if (matrix[i][j] == 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
    for (int i = 1; i < row; ++i) {
      for (int j = 1; j < col; ++j) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
      }
    }
    if (needZeroFirstCol) for (int i = 0; i < row; ++i) matrix[i][0] = 0;
    if (needZeroFirstRow) for (int j = 0; j < col; ++j) matrix[0][j] = 0;
  }
};