//
// Created by ZiqianCheng on 2021/5/25.
//

// MEDIUM https://leetcode-cn.com/problems/rotate-matrix-lcci/

/*
 * Given an image represented by an N x N matrix,
 * where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

 

Example 1:

Given matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

Rotate the matrix in place. It becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

Rotate the matrix in place. It becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

#include <vector>
using namespace std;
class Solution {
public:
  void rotate(vector<vector<int>>& matrix) {
    int N = matrix.size();
    for (int i = 0; i < N / 2; ++i) {
      for (int j = 0; j < (N + 1) / 2; ++j) {
        int tmp = matrix[i][j];
        matrix[i][j] = matrix[N - j - 1][i];
        matrix[N - j - 1][i] = matrix[N - i - 1][N - j - 1];
        matrix[N - i - 1][N - j - 1] = matrix[j][N - i - 1];
        matrix[j][N - i - 1] = tmp;
      }
    }
  }
};