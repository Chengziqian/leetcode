// 11/17/2020 MEDIUM

// https://leetcode-cn.com/problems/adding-two-negabinary-numbers/

/*
Given two numbers arr1 and arr2 in base -2, return the result of adding them together.

Each number is given in array format:  as an array of 0s and 1s, from most significant bit to least significant bit.  
For example, arr = [1,1,0,1] represents the number (-2)^3 + (-2)^2 + (-2)^0 = -3.  
l A number arr in array, format is also guaranteed to have no leading zeros: either arr == [0] or arr[0] == 1.

Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s with no leading zeros.

 

Example 1:

Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
Output: [1,0,0,0,0]
Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.
Example 2:

Input: arr1 = [0], arr2 = [0]
Output: [0]
Example 3:

Input: arr1 = [0], arr2 = [1]
Output: [1]
 

Constraints:

1 <= arr1.length, arr2.length <= 1000
arr1[i] and arr2[i] are 0 or 1
arr1 and arr2 have no leading zeros

 */

function addNegabinary(arr1: number[], arr2: number[]): number[] {
  let longArr = arr1;
  let shortArr = arr2;
  if (arr1.length < arr2.length) {
    longArr = arr2;
    shortArr = arr1;
  }
  let fill = longArr.length - shortArr.length;
  while (fill--) {
    shortArr.unshift(0);
  }
  const ans = [];
  let carry = 0;
  for (let i = longArr.length - 1; i >= 0 || carry !== 0; i--) {
    const bitSum = (longArr[i] || 0) + (shortArr[i] || 0) + carry;
    if (bitSum >= 2) {
      carry = -1;
      ans.unshift(bitSum - 2);
    } else if (bitSum === -1) {
      carry = 1;
      ans.unshift(1);
    } else {
      carry = 0;
      ans.unshift(bitSum);
    }
  }
  let zeroEnd = 0;
  while (zeroEnd < ans.length - 1 && ans[zeroEnd] === 0) zeroEnd++;
  return ans.slice(zeroEnd);
};
