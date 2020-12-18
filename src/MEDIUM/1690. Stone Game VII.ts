// 12/14/2020 MEDIUM

// https://leetcode-cn.com/problems/stone-game-vii/

/*

Alice and Bob take turns playing a game, with Alice starting first.

There are n stones arranged in a row. On each player's turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' values in the row. The winner is the one with the higher score when there are no stones left to remove.

Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score's difference. Alice's goal is to maximize the difference in the score.

Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally.
a761a5023e7f1459150433a0328ce182d50f9fcf
 

Example 1:

Input: stones = [5,3,1,4,2]
Output: 6
Explanation: 
- Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
- Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
- Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
- Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
- Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
The score difference is 18 - 12 = 6.
Example 2:

Input: stones = [7,90,5,1,100,10,10,2]
Output: 122
 

Constraints:

n == stones.length
2 <= n <= 1000
1 <= stones[i] <= 1000

 */

// function stoneGameVII(stones: number[]): number {
//   const sum: number[] = new Array(stones.length + 1).fill(0);
//   for (let i = 0; i < stones.length; i++) {
//     sum[i + 1] = sum[i] + stones[i];
//   }
//   const dp: number[][] = [];
//   for (let i = 0; i < stones.length; i++) {
//     dp.push(new Array(stones.length).fill(0));
//   }
//  
//   for (let i = stones.length - 2; i >= 0; i--) {
//     for (let j = i + 1; j < stones.length; j++) {
//       dp[i][j] = Math.max(sum[j + 1] - sum[i + 1] - dp[i + 1][j], sum[j] - sum[i] - dp[i][j - 1]);
//     }
//   }
//   return dp[0][stones.length - 1];
// };

function stoneGameVII(stones: number[]): number {
  const sum: number[] = new Array(stones.length + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    sum[i + 1] = sum[i] + stones[i];
  }
  const dp: number[][] = [];
  for (let i = 0; i < stones.length; i++) {
    dp.push(new Array(stones.length).fill(0));
  }

  return dfs(0, stones.length - 1);
  
  function dfs(left: number, right: number) {
    if (left === right) return 0;
    if (dp[left][right]) return dp[left][right];
    dp[left][right] = Math.max(sum[right + 1] - sum[left + 1] - dfs(left + 1, right), sum[right] - sum[left] - dfs(left, right - 1));
    return dp[left][right];
  }
};
