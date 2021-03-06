// 03/04/2021 HARD

// https://leetcode-cn.com/problems/russian-doll-envelopes/

/*
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

 */

// function maxEnvelopes(envelopes: number[][]): number {
//   envelopes.sort((a, b) => {
//     if (a[0] === b[0]) return b[1] - a[1];
//     else return a[0] - b[0];
//   });
//   const dp: number[] = new Array(envelopes.length).fill(1);
//   let ans = 0;
//   for (let i = 1; i < envelopes.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (envelopes[j][1] < envelopes[i][1]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   for (let i = 0; i < dp.length; i++) {
//     ans = Math.max(ans, dp[i]);
//   }
//   return ans;
// };

function maxEnvelopes(envelopes: number[][]): number {
  if (!envelopes.length) return 0;
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });
  const tails: number[] = [envelopes[0][1]];
  for (let i = 1; i < envelopes.length; i++) {
    const target = envelopes[i][1];
    let left = 0, right = tails.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (tails[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    if (left >= tails.length) tails.push(target);
    else tails[left] = target;
  }
  return tails.length;
};
