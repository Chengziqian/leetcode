// 01/18/2021 MEDIUM

// https://leetcode-cn.com/problems/largest-submatrix-with-rearrangements/

/*
You are given a binary matrix matrix of size m x n, 
and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

 

Example 1:



Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.
Example 2:



Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.
Example 3:

Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.
Example 4:

Input: matrix = [[0,0],[0,0]]
Output: 0
Explanation: As there are no 1s, no submatrix of 1s can be formed and the area is 0.
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m * n <= 105
matrix[i][j] is 0 or 1.

 */

function largestSubmatrix(matrix: number[][]): number {
  const row = matrix.length;
  if (!row) return 0;
  const col = matrix[0].length;
  const heights: number[][] = new Array(row);
  for (let i = 0; i < heights.length; i++) {
    heights[i] = new Array(col).fill(0);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 1) {
        heights[i][j] = i === 0 ? 1 : heights[i - 1][j] + 1;
       }
    }
  }
  
  let ans = 0;
  
  for (let i = 0; i < row; i++) {
    heights[i].sort((a, b) => b - a);
    for (let j = 0; j < heights[i].length; j++) {
      ans = Math.max(ans, heights[i][j] * (j + 1));
    }
  }
  return ans;
};
