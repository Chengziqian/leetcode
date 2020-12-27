// 12/26/2020 HARD

// https://leetcode-cn.com/problems/maximal-rectangle/

/* 
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = []
Output: 0
Example 3:

Input: matrix = [["0"]]
Output: 0
Example 4:

Input: matrix = [["1"]]
Output: 1
Example 5:

Input: matrix = [["0","0"]]
Output: 0
 

Constraints:-0 vcr

rows == matrix.length
cols == matrix.length
0 <= row, cols <= 200
matrix[i][j] is '0' or '1'.

*/

function maximalRectangle(matrix: string[][]): number {
  const row = matrix.length;
  if (!row) return 0;
  const col = matrix[0].length;
  const leftLen: number[][] = new Array(row);
  for (let i = 0; i < row; i++) {
    leftLen[i] = new Array(col).fill(0);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') leftLen[i][j] = j === 0 ? 1 : leftLen[i][j - 1] + 1
    }
  }

  leftLen.unshift(new Array(col).fill(0));
  leftLen.push(new Array(col).fill(0));

  let ans = 0;
  for (let j = 0; j < col; j++) {
    const stack: number[] = [];
    for (let i = 0; i < leftLen.length; i++) {
      while (stack.length && leftLen[stack[stack.length - 1]][j] > leftLen[i][j]) {
        const curIndex = stack.pop() as number;
        const width = leftLen[curIndex][j];
        const upIndex = stack[stack.length - 1];
        const downIndex = i;
        ans = Math.max(ans, width * (downIndex - upIndex - 1))
      }
      stack.push(i);
    }
  }
  return ans;
};