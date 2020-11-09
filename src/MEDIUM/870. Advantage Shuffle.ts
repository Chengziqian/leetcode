// 09/30/2020 MEDIUM

// https://leetcode-cn.com/problems/advantage-shuffle/

/*

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
 

Note:

1 <= A.length = B.length <= 10000
0 <= A[i] <= 10^9
0 <= B[i] <= 10^9

 */

function advantageCount(A: number[], B: number[]): number[] {
  A.sort((a, b) => a - b);
  const ans: number[] = [];
  for (let i = 0; i < B.length; i++) {
    const currentB = B[i];
    let left = 0;
    let right = A.length - 1;
    if (A[0] > currentB || A[A.length - 1] <= currentB) {
      ans.push(A[0]);
      A.splice(0, 1);
    } else {
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (currentB < A[mid]) right = mid;
        else left = mid + 1;
      }
      ans.push(A[left]);
      A.splice(left, 1);
    }
  }
  return ans;
};


