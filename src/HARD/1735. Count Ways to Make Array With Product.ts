// 04/23/2021 HARD

// https://leetcode-cn.com/problems/count-ways-to-make-array-with-product

/*
You are given a 2D integer array, queries. For each queries[i], where queries[i] = [ni, ki], 
find the number of different ways you can place positive integers into an array of size ni 
such that the product of the integers is ki. 
As the number of ways may be too large, the answer to the ith query is the number of ways modulo 109 + 7.

Return an integer array answer where answer.length == queries.length, and answer[i] is the answer to the ith query.

 

Example 1:

Input: queries = [[2,6],[5,1],[73,660]]
Output: [4,1,50734910]
Explanation: Each query is independent.
[2,6]: There are 4 ways to fill an array of size 2 that multiply to 6: [1,6], [2,3], [3,2], [6,1].
[5,1]: There is 1 way to fill an array of size 5 that multiply to 1: [1,1,1,1,1].
[73,660]: There are 1050734917 ways to fill an array of size 73 that multiply to 660. 1050734917 modulo 109 + 7 = 50734910.
Example 2:

Input: queries = [[1,1],[2,2],[3,3],[4,4],[5,5]]
Output: [1,2,3,10,5]
 

Constraints:

1 <= queries.length <= 104
1 <= ni, ki <= 104

 */

function waysToFillArray(queries: number[][]): number[] {
  const N = 1e4;
  const LOG_MAX = 13;
  const MOD = 1e9 + 7;
  const C: number[][] = new Array(N + LOG_MAX);
  for (let i = 0; i < C.length; i++) {
    C[i] = new Array(LOG_MAX + 1).fill(0);
  }
  C[0][0] = 1;
  for (let i = 1; i < N + LOG_MAX; i++) {
    C[i][0] = 1;
    for (let j = 1; j <= i && j < LOG_MAX + 1; j++) {
      C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
    }
  }
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    let [n, k] = queries[i];
    let sum = 1;
    for (let x = 2; x * x <= k; x++) {
      if (k % x === 0) {
        let count = 0;
        while (k % x === 0) {
          count++;
          k /= x;
        }
        sum = sum * C[n + count - 1][count] % MOD;
      }
    }
    if (k !== 1) {
      sum = sum * n % MOD;
    }
    ans.push(sum);
  }
  return ans;
};
