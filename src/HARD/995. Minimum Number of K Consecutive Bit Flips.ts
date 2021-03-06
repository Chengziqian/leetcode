// 02/18/2021 HARD

// https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips/

/*
In an array A containing only 0s and 1s, a K-bit flip consists of choosing a (contiguous) subarray of length K and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.

Return the minimum number of K-bit flips required so that there is no 0 in the array.  If it is not possible, return -1.

 

Example 1:

Input: A = [0,1,0], K = 1
Output: 2
Explanation: Flip A[0], then flip A[2].
Example 2:

Input: A = [1,1,0], K = 2
Output: -1
Explanation: No matter how we flip subarrays of size 2, we can't make the array become [1,1,1].
Example 3:

Input: A = [0,0,0,1,0,1,1,0], K = 3
Output: 3
Explanation:
Flip A[0],A[1],A[2]: A becomes [1,1,1,1,0,1,1,0]
Flip A[4],A[5],A[6]: A becomes [1,1,1,1,1,0,0,0]
Flip A[5],A[6],A[7]: A becomes [1,1,1,1,1,1,1,1]
 

Note:

1 <= A.length <= 30000
1 <= K <= A.length

 */

function minKBitFlips(A: number[], K: number): number {
  const diff: number[] = new Array(A.length + 1).fill(0);
  let start = 0;
  let ans = 0;
  while (start < A.length && A[start] === 1) start++;
  let left = start, right = start + K - 1;
  let preDiff = 0;
  while (left < A.length) {
    right = left + K - 1;
    if (right >= A.length) return -1;
    diff[left]++;
    diff[right + 1]--;
    ans++;
    while (left < A.length) {
      const currentDiff = preDiff + diff[left];
      if (A[left] === 1 && currentDiff % 2 === 1) break;
      if (A[left] === 0 && currentDiff % 2 === 0) break;
      preDiff = currentDiff;
      left++;
    }
  }
  return ans;
};
