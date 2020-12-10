// 12/10/2020 MEDIUM

// https://leetcode-cn.com/problems/bitwise-ors-of-subarrays/

/*

We have an array arr of non-negative integers.

For every (contiguous) subarray sub = [arr[i], arr[i + 1], ..., arr[j]] (with i <= j),
 we take the bitwise OR of all the elements in sub, obtaining a result arr[i] | arr[i + 1] | ... | arr[j].

Return the number of possible results. Results that occur more than once are only counted once in the final answer

 

Example 1:

Input: arr = [0]
Output: 1
Explanation: There is only one possible result: 0.
Example 2:

Input: arr = [1,1,2]
Output: 3
Explanation: The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
These yield the results 1, 1, 2, 1, 3, 3.
There are 3 unique values, so the answer is 3.
Example 3:

Input: arr = [1,2,4]
Output: 6
Explanation: The possible results are 1, 2, 3, 4, 6, and 7.
 

Constraints:

1 <= nums.length <= 5 * 104
0 <= nums[i] <= 109

 */

// function subarrayBitwiseORs(arr: number[]): number {
//   let cur: Set<number> = new Set<number>();
//   cur.add(0);
//   const ans: Set<number> = new Set<number>();
//   for (let i = 0; i < arr.length; i++) {
//     const temp: Set<number> = new Set<number>();
//     for (let n of cur) {
//       temp.add(n | arr[i]);
//     }
//     temp.add(arr[i]);
//     cur = temp;
//     for (let n of cur) {
//       ans.add(n);
//     }
//   }
//   return ans.size;
// };

// function subarrayBitwiseORs(arr: number[]): number {
//   const ans: Set<number> = new Set<number>();
//   for (let i = 0; i < arr.length; i++) {
//     ans.add(arr[i]);
//     for (let j = i - 1; j >= 0; j--) {
//       if ((arr[j] | arr[i]) === arr[j]) break;
//       arr[j] |= arr[i];
//       ans.add(arr[j]);
//     }
//   }
//   return ans.size;
// };

function subarrayBitwiseORs(arr: number[]): number {
  const ans: Set<number> = new Set<number>();
  const dp: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    dp.push(new Array(arr.length).fill(0));
  }
  ans.add(arr[0]);
  dp[0][0] = arr[0];
  for (let j = 1; j < arr.length; j++) {
    ans.add(arr[j]);
    dp[j][j] = arr[j];
    for (let i = j - 1; i >= 0; i--) {
      dp[i][j] = dp[i][j - 1] | arr[j];
      ans.add(dp[i][j]);
    }
  }
  return ans.size;
}
