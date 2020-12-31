// 12/31/2020 MEDIUM

// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/

/*
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？


示例 1:

输入: 
[
 [1,3,1],
 [1,5,1],
 [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 

提示：

0 < grid.length <= 200
0 < grid[0].length <= 200

 */

function maxValue(grid: number[][]): number {
  const row = grid.length;
  if (!row) return 0;
  const col = grid[0].length;
  const dp: number[] = new Array(col).fill(0);
  dp[0] = grid[0][0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j > 0) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (i > 0 && j === 0) {
        dp[j] = dp[j] + grid[i][j];
      } else if (i > 0 && j > 0) {
        dp[j] = Math.max(dp[j - 1], dp[j]) + grid[i][j];
      }
    }
  }
  return dp[col - 1];
};
