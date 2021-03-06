// 02/17/2021

// https://leetcode-cn.com/problems/reshape-the-matrix/

/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
Example 2:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.

 */

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
  const row = nums.length;
  const col = nums[0].length;
  if (row * col !== r * c) return nums;
  const ans: number[][] = new Array(r);
  for (let i = 0; i < r; i++) {
    ans[i] = new Array(c);
  }
  let ii = 0, jj = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans[ii][jj] = nums[i][j];
      jj++;
      if (jj === c) {
        jj = 0;
        ii++;
      }
    }
  }
  return ans;
};
