// 11/12/2020 MEDIUM

// https://leetcode-cn.com/problems/binary-trees-with-factors/

/*

Given an array of unique integers, each integer is strictly greater than 1.

We make a binary tree using these integers and each number may be used for any number of times.

Each non-leaf node's value should be equal to the product of the values of it's children.

How many binary trees can we make?  Return the answer modulo 10 ** 9 + 7.

Example 1:

Input: A = [2, 4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: A = [2, 4, 5, 10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].

 */

// function numFactoredBinaryTrees(A: number[]): number {
//   const record: {[Key: string]: boolean} = {};
//
//   const MOD = 1e9 + 7;
//
//   for (let i = 0; i < A.length; i++) {
//     record[A[i]] = true;
//   }
//
//   const treeCountRecord: {[key: string]: number} = {};
//
//   let ans = 0;
//
//   for (let i = 0; i < A.length; i++) {
//     ans += treeCount(A[i]) % MOD;
//   }
//
//   return ans % MOD;
//
//   function treeCount(rootValue: number): number {
//     if (treeCountRecord[rootValue]) return treeCountRecord[rootValue];
//     let ans = 1;
//     for (let i = 0; i < A.length; i++) {
//       if (rootValue % A[i] === 0 && record[rootValue / A[i]]) {
//         ans += treeCount(A[i]) * treeCount(rootValue / A[i]);
//       }
//     }
//     treeCountRecord[rootValue] = ans % MOD;
//     return ans % MOD;
//   }
// };

function numFactoredBinaryTrees(A: number[]): number {
  const MOD = 1e9 + 7;
  A.sort((a, b) => a - b);
  const dp: number[] = new Array(A.length).fill(1);
  const indexMap: {[Key: string]: number} = {};
  for (let i = 0; i < A.length; i++) {
    indexMap[A[i]] = i;
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] % A[j] === 0 && indexMap[A[i] / A[j]] !== undefined) {
        dp[i] = (dp[i] + dp[j] * dp[indexMap[A[i] / A[j]]]) % MOD;
      }
    }
  }

  return dp.reduce((pre, cur) => pre + cur, 0) % MOD;

};

