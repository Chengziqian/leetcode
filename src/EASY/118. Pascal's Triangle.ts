// 12/06/2020 EASY

// https://leetcode-cn.com/problems/pascals-triangle/

/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const ans: number[][] =  [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const currRow: number[] = new Array(i + 1).fill(1);
    for (let k = 1; k < i; k++) {
      currRow[k] = ans[i - 1][k - 1] + ans[i - 1][k];
    }
    ans.push(currRow);
  }
  return ans;
};