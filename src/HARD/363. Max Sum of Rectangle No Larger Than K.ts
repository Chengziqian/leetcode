// 04/22/2021 HARD

// https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/

/*
Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

It is guaranteed that there will be a rectangle with a sum no larger than k.

 

Example 1:


Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
Example 2:

Input: matrix = [[2,2,-1]], k = 3
Output: 3
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-105 <= k <= 105
 

Follow up: What if the number of rows is much larger than the number of columns?

 */
import { BST } from '../../utils/BST';

// function maxSumSubmatrix(matrix: number[][], k: number): number {
//   const row = matrix.length;
//   const col = matrix[0].length;
//   const sum: number[][] = new Array(row + 1);
//   for (let i = 0; i < sum.length; i++) {
//     sum[i] = new Array(col + 1).fill(0)
//   }
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + matrix[i][j];
//     }
//   }
//   let ans = Number.MIN_SAFE_INTEGER;
//   for (let rowStart = 0; rowStart < row; rowStart++) {
//     for (let rowEnd = rowStart; rowEnd < row; rowEnd++) {
//       const bst = new BST<number>((a, b) => a - b);
//       bst.insert(0);
//       for (let j = 0; j < col; j++) {
//         const area = sum[rowEnd + 1][j + 1] - sum[rowStart][j + 1] - sum[rowEnd + 1][0] + sum[rowStart][0];
//         const find = bst.lowerBound(area - k);
//         if (find !== undefined) {
//           ans = Math.max(area - find, ans);
//         }                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 
//         bst.insert(area);
//       }
//     }
//   }
//   return ans;
// };

function maxSumSubmatrix(matrix: number[][], k: number): number {
  const row = matrix.length;
  const col = matrix[0].length;
  const sum: number[][] = new Array(row + 1);
  for (let i = 0; i < sum.length; i++) {
    sum[i] = new Array(col + 1).fill(0)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + matrix[i][j];
    }
  }
  let ans = Number.MIN_SAFE_INTEGER;
  for (let rowStart = 0; rowStart < row; rowStart++) {
    for (let rowEnd = rowStart; rowEnd < row; rowEnd++) {
      const list: number[] = [0];
      for (let j = 0; j < col; j++) {
        const area = sum[rowEnd + 1][j + 1] - sum[rowStart][j + 1] - sum[rowEnd + 1][0] + sum[rowStart][0];
        const find = lowerBound(list, area - k);
        if (find < list.length) {
          ans = Math.max(area - list[find], ans);
        }
        list.splice(lowerBound(list, area), 0, area)
      }
    }
  }
  return ans;
  
  function lowerBound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      const mid = left + right >> 1;
      if (nums[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  }
};
