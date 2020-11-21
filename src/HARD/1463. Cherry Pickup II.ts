// 11/18/2020 HARD

// https://leetcode-cn.com/problems/cherry-pickup-ii/

/*

Given a rows x cols matrix grid representing a field of cherries.
 Each cell in grid represents the number of cherries that you can collect.

You have two robots that can collect cherries for you, 
Robot #1 is located at the top-left corner (0,0) , 
and Robot #2 is located at the top-right corner (0, cols-1) of the grid.

Return the maximum number of cherries collection using both robots  by following the rules below:

From a cell (i,j), robots can move to cell (i+1, j-1) , (i+1, j) or (i+1, j+1).
When any robot is passing through a cell, It picks it up all cherries, and the cell becomes an empty cell (0).
When both robots stay on the same cell, only one of them takes the cherries.
Both robots cannot move outside of the grid at any moment.
Both robots should reach the bottom row in the grid.
 

Example 1:

Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
Output: 24
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
Total of cherries: 12 + 12 = 24.
Example 2:

Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
Output: 28
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
Total of cherries: 17 + 11 = 28.
Example 3:

Input: grid = [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]]
Output: 22
Example 4:

Input: grid = [[1,1],[1,1]]
Output: 4
 

Constraints:

rows == grid.length
cols == grid[i].length
2 <= rows, cols <= 70
0 <= grid[i][j] <= 100 

 */

function cherryPickup(grid: number[][]): number {
  const rowLen = grid.length;
  if (!rowLen) return 0;
  const colLen = grid[0].length;
  
  const dp: number[][][] = []
  for (let i = 0; i < rowLen; i++) {
    dp[i] = [];
    for (let j = 0; j < colLen; j++) {
      dp[i].push(new Array(colLen).fill(0));
    }
  }
  dp[0][0][colLen - 1] = grid[0][0] + grid[0][colLen - 1];
  const delta = [-1, 0, 1];
  for (let i = 1; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (j > i) continue;
      for (let jj = j + 1; jj < colLen; jj++) {
        if (jj < colLen - 1 - i) continue;
        for (let d1 = 0; d1 < 3; d1++) {
          for (let d2 = 0; d2 < 3; d2++) {
            const pre1 = j + delta[d1];
            const pre2 = jj + delta[d2];
            if (pre1 < 0 || pre1 >= colLen || pre2 < 0 || pre2 >= colLen) continue;
            dp[i][j][jj] = Math.max(dp[i][j][jj], dp[i - 1][pre1][pre2] + grid[i][j] + grid[i][jj])
          }
        }
      }
    }
  }
  let ans = Number.MIN_SAFE_INTEGER;
  for (let j = 0; j < colLen; j++) {
    for (let jj = j + 1; jj < colLen; jj++) {
      ans = Math.max(ans, dp[rowLen - 1][j][jj]);
    }
  }
  return ans;
};
