// 05/10/2021 MEDIUM

// https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/

/*
Given an integer array bloomDay, an integer m and an integer k.

We need to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

 

Example 1:

Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
Output: 3
Explanation: Let's see what happened in the first three days. x means flower bloomed and _ means flower didn't bloom in the garden.
We need 3 bouquets each should contain 1 flower.
After day 1: [x, _, _, _, _]   // we can only make one bouquet.
After day 2: [x, _, _, _, x]   // we can only make two bouquets.
After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.
Example 2:

Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
Output: -1
Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.
Example 3:

Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
Output: 12
Explanation: We need 2 bouquets each should have 3 flowers.
Here's the garden after the 7 and 12 days:
After day 7: [x, x, x, x, _, x, x]
We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
After day 12: [x, x, x, x, x, x, x]
It is obvious that we can make two bouquets in different ways.
Example 4:

Input: bloomDay = [1000000000,1000000000], m = 1, k = 1
Output: 1000000000
Explanation: You need to wait 1000000000 days to have a flower ready for a bouquet.
Example 5:

Input: bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
Output: 9
 

Constraints:

bloomDay.length == n
1 <= n <= 10^5
1 <= bloomDay[i] <= 10^9
1 <= m <= 10^6
1 <= k <= n
 */

// function minDays(bloomDay: number[], m: number, k: number): number {
//   const INF = 1e9 + 1;
//   if (bloomDay.length < m * k) return -1;
//   let left = 0;
//   const queue: number[] = [];
//   const rangeMax: number[] = new Array(bloomDay.length - k + 1);
//   for (let right = 0; right < bloomDay.length; right++) {
//     if (right >= k) left++;
//     while (queue.length && queue[0] < left) queue.shift();
//     while (queue.length && bloomDay[queue[queue.length - 1]] < bloomDay[right]) queue.pop();
//     queue.push(right);
//     rangeMax[left] = bloomDay[queue[0]];
//   }
//   const dp: number[][] = new Array(bloomDay.length + 1);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(m + 1).fill(INF);
//     dp[i][0] = 0;
//   }
//   for (let i = 1; i <= bloomDay.length; i++) {
//     for (let j = 1; j <= m; j++) {
//       if (i < m * k) dp[i][j] = INF;
//       else dp[i][j] = Math.min(dp[i - 1][j], Math.max(dp[i - k][j - 1], rangeMax[i - k]));
//     }
//   }
//   return dp[bloomDay.length][m];
// };


function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) return -1;
  let left = 0, right = 1e9;
  while (left <= right) {
    const mid = left + right >> 1;
    if (check(mid)) right = mid - 1;
    else left = mid + 1;
  }
  return left;
  function check(currentDay: number) {
    let count = 0;
    let bouquets = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= currentDay) count++;
      else count = 0;
      if (count === k) {
        bouquets++;
        count = 0;
      }
    }
    return bouquets >= m;
  }
};
