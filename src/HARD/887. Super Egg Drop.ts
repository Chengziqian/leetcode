// 12/11/2020 HARD

// https://leetcode-cn.com/problems/super-egg-drop/

/*
You are given K eggs, and you have access to a building with N floors from 1 to N. 

Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

Your goal is to know with certainty what the value of F is.

What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

 

Example 1:

Input: K = 1, N = 2
Output: 2
Explanation: 
Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
If it didn't break, then we know with certainty F = 2.
Hence, we needed 2 moves in the worst case to know what F is with certainty.
Example 2:

Input: K = 2, N = 6
Output: 3
Example 3:

Input: K = 3, N = 14
Output: 4
 

Note:

1 <= K <= 100
1 <= N <= 10000

 */

function superEggDrop(K: number, N: number): number {
  const dp: number[][] = new Array(K + 1);
  for (let i = 0; i < K + 1; i++) {
    dp[i] = new Array(N + 1).fill(0);
  }
  for (let i = 1; i <= N; i++) {
    dp[1][i] = i;
    dp[0][i] = 0;
  }
  for (let k = 2; k <= K; k++) {
    for (let n = 1; n <= N; n++) {
      let left = 1, right = n;
      let res = Number.MAX_SAFE_INTEGER;
      while (left <= right) {
        const mid = (left + right) >> 1;
        if (dp[k - 1][mid - 1] <= dp[k][n - mid]) {
          left = mid + 1;
          res = Math.min(res, dp[k][n - mid]);
        }
        else {
          right = mid - 1;
          res = Math.min(res, dp[k - 1][mid - 1]);
        }
      }
      dp[k][n] = 1 + res;
    }
  }
  return dp[K][N];
};
