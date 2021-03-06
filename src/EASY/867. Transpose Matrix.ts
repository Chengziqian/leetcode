// 25/02/2021 EASY

// https://leetcode-cn.com/problems/transpose-matrix/

/*
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109

 */

function transpose(matrix: number[][]): number[][] {
  const row = matrix.length;
  const col = matrix[0].length;
  const ans: number[][] = new Array(col);
  for (let i = 0; i < col; i++) {
    ans[i] = new Array(row);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans[j][i] = matrix[i][j];
    }
  }
  return ans;
};
