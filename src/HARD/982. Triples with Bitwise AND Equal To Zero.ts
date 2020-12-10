// 12/09/2020 HARD

// https://leetcode-cn.com/problems/triples-with-bitwise-and-equal-to-zero/

/*
Given an array of integers A, find the number of triples of indices (i, j, k) such that:

0 <= i < A.length
0 <= j < A.length
0 <= k < A.length
A[i] & A[j] & A[k] == 0, where & represents the bitwise-AND operator.
 

Example 1:

Input: [2,1,3]
Output: 12
Explanation: We could choose the following i, j, k triples:
(i=0, j=0, k=1) : 2 & 2 & 1
(i=0, j=1, k=0) : 2 & 1 & 2
(i=0, j=1, k=1) : 2 & 1 & 1
(i=0, j=1, k=2) : 2 & 1 & 3
(i=0, j=2, k=1) : 2 & 3 & 1
(i=1, j=0, k=0) : 1 & 2 & 2
(i=1, j=0, k=1) : 1 & 2 & 1
(i=1, j=0, k=2) : 1 & 2 & 3
(i=1, j=1, k=0) : 1 & 1 & 2
(i=1, j=2, k=0) : 1 & 3 & 2
(i=2, j=0, k=1) : 3 & 2 & 1
(i=2, j=1, k=0) : 3 & 1 & 2
 

Note:

1 <= A.length <= 1000
0 <= A[i] < 2^16

 */
// function countTriplets(A: number[]): number {
//   const record: {[Key: string]: number} = {}
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A.length; j++) {
//       if (record[A[i] & A[j]] === undefined) {
//         record[A[i] & A[j]] = 1;
//       } else {
//         record[A[i] & A[j]]++;
//       }
//     }
//   }
//   let ans = 0;
//   for (let k = 0; k < A.length; k++) {
//     for (let key in record) {
//       if ((A[k] & +key) === 0) ans += record[key];
//     }
//   }
//   return ans;
// };

function countTriplets(A: number[]): number {
  const record: {[Key: string]: number} = {0: 0}
  const mask: number = (1 << 16) - 1;
  for (let i = 0; i < A.length; i++) {
    let set = mask ^ A[i];
    let sub = set;
    while (sub) {
      if (record[sub] === undefined) {
        record[sub] = 1;
      } else {
        record[sub]++;
      }
      sub = (sub - 1) & set;
    }
    record[0]++;
  }
  let ans = 0;
  for (let j = 0; j < A.length; j++) {
    for (let k = 0; k < A.length; k++) {
      ans += record[A[j] & A[k]] || 0;
    }
  }
  return ans;
};
