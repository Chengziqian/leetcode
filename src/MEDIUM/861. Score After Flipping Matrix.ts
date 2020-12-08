// 12/07/2020 MEDIUM

// https://leetcode-cn.com/problems/score-after-flipping-matrix/

/*
We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.

 

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 

Note:

1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] is 0 or 1.

 */

function matrixScore(A: number[][]): number {
  const row = A.length;
  if (!row) return 0;
  const col = A[0].length;
  for (let i = 0; i < row; i++) {
    if (A[i][0] === 0) {
      for (let j = 0; j < col; j++) {
        A[i][j] = A[i][j] === 0 ? 1 : 0;
      }
    }
  }
  for (let j = 1; j < col; j++) {
    let zeroCount = 0;
    for (let i = 0; i < row; i++) {
      if (A[i][j] === 0) zeroCount++;
    }
    if (zeroCount > (row >> 1)) {
      for (let i = 0; i < row; i++) {
        A[i][j] = A[i][j] === 0 ? 1 : 0;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < row; i++) {
    let rowValue = 0;
    for (let j = 0; j < col; j++) {
      rowValue += A[i][j] * (1 << col - j - 1)
    }
    ans += rowValue;
  }
  return ans;
};
