//
// Created by ZiqianCheng on 2021/6/1.
//

// MEDIUM https://leetcode-cn.com/problems/sorted-matrix-search-lcci/

/*
 * Given an M x N matrix in which each row and each column is sorted in ascending order,
 * write a method to find an element.

Example:

Given matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

 */

#include <vector>
using namespace std;
class Solution {
public:
  bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int row = matrix.size();
    if (!row) return false;
    int col = matrix[0].size();
    if (!col) return false;
    int i = 0, j = col - 1;
    while (i < row && j >= 0) {
      if (matrix[i][j] == target) return true;
      else if (matrix[i][j] > target) j--;
      else i++;
    }
    return false;
  }
};