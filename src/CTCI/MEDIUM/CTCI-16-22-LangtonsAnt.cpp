//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/langtons-ant-lcci/

/*
 * An ant is sitting on an infinite grid of white and black squares. It initially faces right. All squares are white initially.

At each step, it does the following:

(1) At a white square, flip the color of the square, turn 90 degrees right (clockwise), and move forward one unit.

(2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move forward one unit.

Write a program to simulate the first K moves that the ant makes and print the final board as a grid.

The grid should be represented as an array of strings, where each element represents one row in the grid.
 The black square is represented as 'X', and the white square is represented as '_',
 the square which is occupied by the ant is represented as 'L', 'U', 'R', 'D',
 which means the left, up, right and down orientations respectively.
 You only need to return the minimum matrix that is able to contain all squares that are passed through by the ant.

Example 1:

Input: 0
Output: ["R"]
Example 2:

Input: 2
Output:
[
  "_X",
  "LX"
]
Example 3:

Input: 5
Output:
[
  "_U",
  "X_",
  "XX"
]
Note:

K <= 100000
 */

#include <vector>
#include <set>
#include <string>
using namespace std;
class Solution {
public:
  vector<string> printKMoves(int K) {
    set<pair<int, int>> record;
    pair<int, int> pos = {0, 0};
    char dirTag[4] = {'R', 'D', 'L', 'U'};
    int dirDelta[4][2] = {{1, 0},{0, -1},{-1, 0},{0, 1}};
    int dirIndex = 0;
    pair<int, int> topLeft = {0, 0}, bottomRight = {0, 0};
    while(K--) {
      if (!record.count(pos)) {
        record.insert(pos);
        dirIndex = (dirIndex + 1) % 4;
      } else {
        record.erase(pos);
        dirIndex = (dirIndex + 3) % 4;
      }
      pos.first += dirDelta[dirIndex][0];
      pos.second += dirDelta[dirIndex][1];
      topLeft.first = min(pos.first, topLeft.first);
      topLeft.second = max(pos.second, topLeft.second);
      bottomRight.first = max(pos.first, bottomRight.first);
      bottomRight.second = min(pos.second, bottomRight.second);
    }
    vector<string> ans;
    for (int y = topLeft.second; y >= bottomRight.second; --y) {
      string currentLine;
      for (int x = topLeft.first; x <= bottomRight.first; ++x) {
        if (x == pos.first && y == pos.second) {
          currentLine.push_back(dirTag[dirIndex]);
        } else if (record.count(make_pair(x, y))) {
          currentLine.push_back('X');
        } else {
          currentLine.push_back('_');
        }
      }
      ans.push_back(currentLine);
    }
    return ans;
  }
};