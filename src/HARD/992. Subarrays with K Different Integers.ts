// 02/09/2021 HARD LABEL: slide window

// https://leetcode-cn.com/problems/subarrays-with-k-different-integers/

/*
Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

 

Example 1:

Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
Example 2:

Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Note:

1 <= A.length <= 20000
1 <= A[i] <= A.length
1 <= K <= A.length

 */

function subarraysWithKDistinct(A: number[], K: number): number {
  return atMost(A, K) - atMost(A, K - 1);
  
  function atMost(A: number[], K: number) {
    const record: Map<number, number> = new Map<number, number>();
    let ans = 0;
    let left = 0, right = 0;
    while (right < A.length) {
      const rightCount = record.has(A[right]) ? record.get(A[right]) : 0;
      record.set(A[right], rightCount + 1);
      right++;
      while (record.size > K) {
        const leftCount = record.get(A[left]);
        if (leftCount - 1 === 0) record.delete(A[left]);
        else record.set(A[left], leftCount - 1);
        left++;
      }
      ans += right - left;
    }
    return ans;
  }
};
