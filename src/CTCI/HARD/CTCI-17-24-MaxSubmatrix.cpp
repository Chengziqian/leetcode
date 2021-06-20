//
// Created by ZiqianCheng on 2021/6/14.
//

// HARD https://leetcode-cn.com/problems/max-submatrix-lcci/

/*
 * Given an NxN matrix of positive and negative integers, write code to find the submatrix with the largest possible sum.

Return an array [r1, c1, r2, c2], where r1, c1 are the row number and the column number of the submatrix's upper left corner respectively, and r2, c2 are the row number of and the column number of lower right corner. If there are more than one answers, return any one of them.

Note: This problem is slightly different from the original one in the book.

Example:

Input:
[
   [-1,0],
   [0,-1]
]
Output: [0,1,0,1]
Note:

1 <= matrix.length, matrix[0].length <= 200

 */


#include <vector>
using namespace std;
class Solution {
public:
  vector<int> getMaxMatrix(vector<vector<int>>& matrix) {
    int row = matrix.size();
    int col = matrix[0].size();
    vector<vector<int>> sum(row + 1, vector<int>(col + 1, 0));
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + matrix[i][j];
      }
    }
    int maxValue = INT_MIN;
    int ansR1,ansR2,ansC1,ansC2;
    for (int r1 = 0; r1 < row; r1++) {
      for (int r2 = r1; r2 < row; r2++) {
        int minCol = 0;
        int minValue = 0;
        for (int j = 0; j < col; ++j) {
          int curSum = sum[r2 + 1][j + 1] - sum[r1][j + 1];
          int curMaxValue = curSum - minValue;
          if (curMaxValue > maxValue) {
            maxValue = curMaxValue;
            ansR1 = r1;
            ansR2 = r2;
            ansC1 = minCol;
            ansC2 = j;
          }
          if (curSum < minValue) {
            minValue = curSum;
            minCol = j + 1;
          }
        }
      }
    }
    return { ansR1, ansC1, ansR2, ansC2 };
  }
};