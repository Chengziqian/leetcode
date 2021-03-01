// 02/12/2021 EASY

// https://leetcode-cn.com/problems/pascals-triangle-ii/

/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?

 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33

 */

function getRow(rowIndex: number): number[] {
  const ans: number[] = new Array(rowIndex + 1).fill(1);
  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      ans[j] += ans[j - 1];
    }
  }
  return ans;
};
