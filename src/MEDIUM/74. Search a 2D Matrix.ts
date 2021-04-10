// 03/30/2021 MEDIUM

// https://leetcode-cn.com/problems/search-a-2d-matrix/

/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const row = matrix.length;
  const col = matrix[0].length;
  let left = 0, right = col * row - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const i = Math.floor(mid / col);
    const j = mid % col;
    if (matrix[i][j] > target) right = mid - 1;
    else if (matrix[i][j] < target) left = mid + 1;
    else return true;
  }
  return false;
};
