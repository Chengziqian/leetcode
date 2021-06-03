//
// Created by ZiqianCheng on 2021/6/2.
//

// MEDIUM https://leetcode-cn.com/problems/tic-tac-toe-lcci/

/*
 * Design an algorithm to figure out if someone has won a game of tic-tac-toe.
 * Input is a string array of size N x N, including characters " ", "X" and "O", where " " represents a empty grid.

The rules of tic-tac-toe are as follows:

Players place characters into an empty grid(" ") in turn.
The first player always place character "O", and the second one place "X".
Players are only allowed to place characters in empty grid. Replacing a character is not allowed.
If there is any row, column or diagonal filled with N same characters, the game ends.
 The player who place the last character wins.
When there is no empty grid, the game ends.
If the game ends, players cannot place any character further.
If there is any winner, return the character that the winner used.
 If there's a draw, return "Draw".
 If the game doesn't end and there is no winner, return "Pending".

Example 1:

Input:  board = ["O X"," XO","X O"]
Output:  "X"
Example 2:

Input:  board = ["OOX","XXO","OXO"]
Output:  "Draw"
Explanation:  no player wins and no empty grid left
Example 3:

Input:  board = ["OOX","XXO","OX "]
Output:  "Pending"
Explanation:  no player wins but there is still a empty grid
Note:

1 <= board.length == board[i].length <= 100
Input follows the rules.
 */
#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  string tictactoe(vector<string>& board) {
    int n = board.size();
    bool hasEmpty = false;
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        if (board[i][j] == ' ') {
          hasEmpty = true;
          break;
        }
      }
      if (hasEmpty) break;
    }
    for (int i = 0; i < n; ++i) {
      int j = 0;
      while (j + 1 < n && board[i][j] != ' ' && board[i][j] == board[i][j + 1]) j++;
      if (j + 1 == n) return string(1, board[i][j]);
    }
    for (int j = 0; j < n; ++j) {
      int i = 0;
      while (i + 1 < n && board[i][j] != ' ' && board[i][j] == board[i + 1][j]) i++;
      if (i + 1 == n) return string(1, board[i][j]);
    }
    int i = 0, j = 0;
    while (i + 1 < n && j + 1 < n && board[i][j] != ' ' && board[i][j] == board[i + 1][j + 1]) {
      i++;
      j++;
    }
    if (i + 1 == n && j + 1 == n) return string(1, board[i][j]);
    i = 0, j = n - 1;
    while (i + 1 < n && j - 1 >= 0 && board[i][j] != ' ' && board[i][j] == board[i + 1][j - 1]) {
      i++;
      j--;
    }
    if (i + 1 == n && j - 1 < 0) return string(1, board[i][j]);
    return hasEmpty ? "Pending" : "Draw";
  }
};