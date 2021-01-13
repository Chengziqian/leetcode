// 01/13/2020 MEDIUM

// https://leetcode-cn.com/problems/construct-the-lexicographically-largest-valid-sequence/

/*
Given an integer n, find a sequence that satisfies all of the following:

The integer 1 occurs once in the sequence.
Each integer between 2 and n occurs twice in the sequence.
For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.
The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices, |j - i|.

Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.

A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, sequence a has a number greater than the corresponding number in b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5.

 

Example 1:

Input: n = 3
Output: [3,1,2,3,2]
Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.
Example 2:

Input: n = 5
Output: [5,3,1,4,3,5,2,4,2]
 

Constraints:

1 <= n <= 20

 */

function constructDistancedSequence(n: number): number[] {
  const ans: number[] = new Array(2 * n - 1).fill(-1);
  const used: boolean[] = new Array(n + 1).fill(false);
  backTrack(0);
  return ans;
  
  function backTrack(pos: number): boolean {
    if (pos >= ans.length) return true;
    if (ans[pos] !== -1) return backTrack(pos + 1);
    for (let i = n; i >= 1; i--) {
      if (used[i]) continue;
      if (i === 1) {
        ans[pos] = 1;
        used[i] = true;
        if (backTrack(pos + 1)) return true;
        ans[pos] = -1;
        used[i] = false;
      } else {
        if (pos + i >= ans.length) continue;
        if (ans[pos + i] !== -1) continue;
        ans[pos] = i;
        ans[pos + i] = i;
        used[i] = true;
        if (backTrack(pos + 1)) return true;
        ans[pos] = -1;
        ans[pos + i] = -1;
        used[i] = false;
      }
    }
    return false;
  }
};
