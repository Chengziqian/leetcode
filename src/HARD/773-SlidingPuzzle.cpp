//
// Created by 程子骞 on 2021/6/26.
//

// HARD https://leetcode-cn.com/problems/sliding-puzzle/

/*
 * On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
Note:

board will be a 2 x 3 array as described above.
board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].
 */

#include <vector>
#include <string>
#include <unordered_set>
#include <queue>
using namespace std;

class Solution {
private:
  int dir[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
  int row = 2;
  int col = 3;
public:
  int slidingPuzzle(vector<vector<int>>& board) {
    unordered_set<string> vis;
    queue<string> q;
    string target = "123450";
    string start;
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        start.push_back(board[i][j] + '0');
      }
    }
    q.push(start);
    int ans = 0;
    while (!q.empty()) {
      int size = q.size();
      for (int i = 0; i < size; ++i) {
        string cur = q.front();
        if (cur == target) return ans;
        q.pop();
        vector<string> nextStates = nextState(cur);
        for (auto& s: nextStates) {
          if (!vis.count(s)) {
            q.push(s);
            vis.insert(s);
          }
        }
      }
      ans++;
    }
    return -1;
  }

  vector<string> nextState(string& state) {
    vector<string> current;
    current.push_back(state.substr(0, 3));
    current.push_back(state.substr(3, 3));
    int zeroI, zeroJ;
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (current[i][j] == '0') {
          zeroI = i;
          zeroJ = j;
          break;
        }
      }
    }
    vector<string> ans;
    for (int k = 0; k < 4; ++k) {
      int nextI = zeroI + dir[k][0];
      int nextJ = zeroJ + dir[k][1];
      if (nextI >= 0 && nextI < row && nextJ >= 0 && nextJ < col) {
        swap(current[zeroI][zeroJ], current[nextI][nextJ]);
        string next = current[0] + current[1];
        ans.push_back(next);
        swap(current[zeroI][zeroJ], current[nextI][nextJ]);
      }
    }
    return ans;
  }
};