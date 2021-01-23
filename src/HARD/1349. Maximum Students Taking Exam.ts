// 01/15/2021 HARD

// https://leetcode-cn.com/problems/maximum-students-taking-exam/

/*
Given a m * n matrix seats that represent seats distributions in a classroom. 
If a seat is broken, it is denoted by '#' character otherwise it is denoted by a '.' character.

Students can see the answers of those sitting next to the left, right, upper left and upper right, 
but he cannot see the answers of the student sitting directly in front or behind him. 
Return the maximum number of students that can take the exam together without any cheating being possible..

Students must be placed in seats in good condition.

 

Example 1:


Input: seats = [["#",".","#","#",".","#"],
                [".","#","#","#","#","."],
                ["#",".","#","#",".","#"]]
Output: 4
Explanation: Teacher can place 4 students in available seats so they don't cheat on the exam. 
Example 2:

Input: seats = [[".","#"],
                ["#","#"],
                ["#","."],
                ["#","#"],
                [".","#"]]
Output: 3
Explanation: Place all students in available seats. 

Example 3:

Input: seats = [["#",".",".",".","#"],
                [".","#",".","#","."],
                [".",".","#",".","."],
                [".","#",".","#","."],
                ["#",".",".",".","#"]]
Output: 10
Explanation: Place students in available seats in column 1, 3 and 5.
 

Constraints:

seats contains only characters '.' and'#'.
m == seats.length
n == seats[i].length
1 <= m <= 8
1 <= n <= 8

 */

function maxStudents(seats: string[][]): number {
  const row = seats.length;
  if (!row) return 0;
  const col = seats[0].length;
  const masks: number[] = new Array(row).fill(0);
  
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      masks[i] <<= 1;
      masks[i] |= seats[i][j] === '.' ? 1 : 0;
    }
  }
  
  const dp: number[][] = new Array(row);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(1 << col).fill(0);
  }
  
  for (let i = 0; i < masks.length; i++) {
    const mask = masks[i];
    if (i > 0) {
      dp[i][0] = Math.max(...dp[i - 1]);
    }
    for (let subset = mask; subset; subset = mask & (subset - 1)) {
      if (subset & (subset << 1)) continue;
      if (i === 0) {
        dp[i][subset] = Math.max(dp[i][subset], bitCount(subset));
      } else {
        const preMask = masks[i - 1];
        dp[i][subset] = dp[i - 1][0] + bitCount(subset);
        for (let preSubset = preMask; preSubset; preSubset = preMask & (preSubset - 1)) {
          if (preSubset & (preSubset << 1)) continue;
          const combine = (preSubset | subset);
          if (!(combine & (combine << 1))) {
            dp[i][subset] = Math.max(dp[i][subset], dp[i - 1][preSubset] + bitCount(subset));
          }
        }
      }
    }
  }
  
  return Math.max(...dp[row - 1]);

  function bitCount(n: number) {
    let ans = 0;
    while (n) {
      if (n & 1) ans++;
      n >>= 1;
    }
    return ans;
  }
};
