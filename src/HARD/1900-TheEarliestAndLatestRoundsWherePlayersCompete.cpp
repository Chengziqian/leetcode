//
// Created by ZiqianCheng on 2021/6/15.
//

// HARD https://leetcode-cn.com/problems/the-earliest-and-latest-rounds-where-players-compete/

/*
 * There is a tournament where n players are participating.
 * The players are standing in a single row and are numbered from 1 to n based on their initial standing position (player 1 is the first player in the row, player 2 is the second player in the row, etc.).

The tournament consists of multiple rounds (starting from round number 1). In each round, the ith player from the front of the row competes against the ith player from the end of the row, and the winner advances to the next round. When the number of players is odd for the current round, the player in the middle automatically advances to the next round.

For example, if the row consists of players 1, 2, 4, 6, 7
Player 1 competes against player 7.
Player 2 competes against player 6.
Player 4 automatically advances to the next round.
After each round is over, the winners are lined back up in the row based on the original ordering assigned to them initially (ascending order).

The players numbered firstPlayer and secondPlayer are the best in the tournament. They can win against any other player before they compete against each other. If any two other players compete against each other, either of them might win, and thus you may choose the outcome of this round.

Given the integers n, firstPlayer, and secondPlayer, return an integer array containing two values, the earliest possible round number and the latest possible round number in which these two players will compete against each other, respectively.

 

Example 1:

Input: n = 11, firstPlayer = 2, secondPlayer = 4
Output: [3,4]
Explanation:
One possible scenario which leads to the earliest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 2, 3, 4, 5, 6, 11
Third round: 2, 3, 4
One possible scenario which leads to the latest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 1, 2, 3, 4, 5, 6
Third round: 1, 2, 4
Fourth round: 2, 4
Example 2:

Input: n = 5, firstPlayer = 1, secondPlayer = 5
Output: [1,1]
Explanation: The players numbered 1 and 5 compete in the first round.
There is no way to make them compete in any other round.
 

Constraints:

2 <= n <= 28
1 <= firstPlayer < secondPlayer <= n
 */

#include <vector>
using namespace std;
#define INF 0x3f3f3f3f
class Solution {
private:
  int dpMax[29][29][29];
  int dpMin[29][29][29];
public:
  vector<int> earliestAndLatest(int n, int firstPlayer, int secondPlayer) {
    memset(dpMax, -1, sizeof dpMax);
    memset(dpMin, -1, sizeof dpMin);
    dfs(n, firstPlayer, secondPlayer);
    return { dpMin[n][firstPlayer][secondPlayer], dpMax[n][firstPlayer][secondPlayer] };
  }

  void dfs(int n, int f, int s) {
    if (dpMax[n][f][s] != -1) return;
    if (f >= s) return;
    if (f + s == n + 1) {
      dpMax[n][f][s] = 1;
      dpMin[n][f][s] = 1;
      return;
    }
    int count[3][3] = {0};
    for (int i = 1, j = n; i <= j; i++, j--) {
      if (i == f || i == s || j == f || j == s) continue;
      int a, b;
      if (i < f) a = 0;
      else if (i < s) a = 1;
      else a = 2;
      if (j < f) b = 0;
      else if (j < s) b = 1;
      else b = 2;
      count[a][b]++;
    }
    dpMax[n][f][s] = -INF;
    dpMin[n][f][s] = INF;
    for (int i = 0; i <= count[0][1]; i++) {
      for (int j = 0; j <= count[0][2]; j++) {
        for (int k = 0; k <= count[1][2]; k++) {
          int firstPos = i + j + count[0][0] + 1;
          int secondPos = (n + 1) / 2 - (count[0][2] - j) - (count[1][2] - k) - count[2][2];
          dfs((n + 1) / 2, firstPos, secondPos);
          dpMax[n][f][s] = max(dpMax[n][f][s], dpMax[(n + 1) / 2][firstPos][secondPos] + 1);
          dpMin[n][f][s] = min(dpMin[n][f][s], dpMin[(n + 1) / 2][firstPos][secondPos] + 1);
        }
      }
    }
  }
};