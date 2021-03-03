// 03/02/2021 MEDIUM

// https://leetcode-cn.com/problems/range-sum-query-2d-immutable/

/*
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).


The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.

 */
class NumMatrix {
  private readonly sum: number[][];
  private readonly row: number;
  private readonly col: number;
  constructor(matrix: number[][]) {
    this.row = matrix.length;
    if (!this.row) {
      this.col = 0;
      return;
    }
    this.col = matrix[0].length;
    this.sum = new Array(this.row + 1);
    for (let i = 0; i < this.sum.length; i++) {
      this.sum[i] = new Array(this.col + 1).fill(0);
    }
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        this.sum[i + 1][j + 1] = this.sum[i][j + 1] + this.sum[i + 1][j] - this.sum[i][j] + matrix[i][j];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (!this.row && !this.col) return 0;
    return this.sum[row2 + 1][col2 + 1] - this.sum[row1][col2 + 1] - this.sum[row2 + 1][col1] + this.sum[row1][col1];
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
