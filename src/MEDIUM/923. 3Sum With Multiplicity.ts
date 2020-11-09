// 10/21/2020 MEDIUM

// https://leetcode-cn.com/problems/3sum-with-multiplicity/

/*

Given an integer array A, and an integer target, return the number of tuples i, j, k  such that i < j < k and A[i] + A[j] + A[k] == target.

As the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (A[i], A[j], A[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
Example 2:

Input: A = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
 

Constraints:

3 <= A.length <= 3000
0 <= A[i] <= 100
0 <= target <= 300

 */

function threeSumMulti(A: number[], target: number): number {
  const MOD = 1e9 + 7;
  let ans: number = 0;
  if (!A.length || A.length < 3) return ans;
  A.sort((a, b) => a - b);
  let countMap: {[Key: number]: number} = {};
  for (let i = 0; i < A.length; i++) {
    if (!countMap[A[i]]) countMap[A[i]] = 1;
    else countMap[A[i]]++;
  }
  for (let k = 0; k < A.length; k++) {
    if (A[k] > target) break;
    if (k > 0 && A[k - 1] === A[k]) continue;
    let i = k + 1;
    let j = A.length - 1;
    while (i < j) {
      const sum = A[i] + A[j] + A[k];
      if (sum === target) {
        if (A[i] === A[j] && A[j] === A[k]) {
          const sameCount = countMap[A[i]];
          ans += sameCount * (sameCount - 1) * (sameCount - 2) / 6;
        } else if (A[k] === A[i]) {
          const sameCount = countMap[A[i]];
          ans += sameCount * (sameCount - 1) / 2 * countMap[A[j]];
        } else if (A[i] === A[j]) {
          const sameCount = countMap[A[i]];
          ans += sameCount * (sameCount - 1) / 2 * countMap[A[k]];
        } else {
          ans += countMap[A[k]] * countMap[A[i]] * countMap[A[j]];
        }
        while (i < j && A[i] === A[i + 1]) i++;
        while (i < j && A[j] === A[j - 1]) j--;
        i++;
        j--;
      } else if (sum < target) {
        while (i < j && A[i] === A[i + 1]) i++;
        i++;
      } else {
        while (i < j && A[j] === A[j - 1]) j--;
        j--;
      }
    }
  }
  return ans % MOD;
};
