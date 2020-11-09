// 09/25/2020 MEDIUM

// https://leetcode-cn.com/problems/stone-game/

/**
 *Alex and Lee play a game with piles of stones.
 *  There are an even number of piles arranged in a row, 
 *  and each pile has a positive integer number of stones piles[i].

 The objective of the game is to end with the most stones.
 The total number of stones is odd, so there are no ties.

 Alex and Lee take turns, with Alex starting first.
 Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.
 This continues until there are no more piles left, at which point the person with the most stones wins.

 Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.
 
 Example 1:

 Input: piles = [5,3,4,5]
 Output: true
 Explanation:
 Alex starts first, and can only take the first 5 or the last 5.
 Say he takes the first 5, so that the row becomes [3, 4, 5].
 If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
 If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
 This demonstrated that taking the first 5 was a winning move for Alex, so we return true.
  

 Constraints:

 2 <= piles.length <= 500
 piles.length is even.
 1 <= piles[i] <= 500
 sum(piles) is odd.
 
 */
// function stoneGame(piles: number[]): boolean {
//   const len = piles.length;
//   const dp: number[][] = [];
//   for (let i = 0; i < len; i++) {
//     dp.push(new Array(len).fill(0));
//   }
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = piles[i];
//   }
//   for (let i = len - 2; i >= 0; i--) {
//     for (let j = i + 1; j < len; j++) {
//       dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
//     }
//   }
//   return dp[0][len - 1] > 0;
// };

function stoneGame(piles: number[]): boolean {
  const len = piles.length;
  const dp: number[] = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    dp[i] = piles[i];
  }
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
    }
  }
  return dp[len - 1] > 0;
};

