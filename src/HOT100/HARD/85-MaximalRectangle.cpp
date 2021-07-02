//
// Created by ZiqianCheng on 2021/6/30.
//

// HARD https://leetcode-cn.com/problems/maximal-rectangle

/*
 * Given a rows x cols binary matrix filled with 0's and 1's,
 * find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = []
Output: 0
Example 3:

Input: matrix = [["0"]]
Output: 0
Example 4:

Input: matrix = [["1"]]
Output: 1
Example 5:

Input: matrix = [["0","0"]]
Output: 0
 

Constraints:

rows == matrix.length
cols == matrix[i].length
0 <= row, cols <= 200
matrix[i][j] is '0' or '1'.

 */

#include <vector>
#include <stack>
using namespace std;
class Solution {
public:
  int maximalRectangle(vector<vector<char>>& matrix) {
    int row = matrix.size();
    if (!row) return 0;
    int col = matrix[0].size();
    if (!col) return 0;
    vector<vector<int>> m(row + 2, vector<int>(col, 0));
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (j == 0) m[i + 1][j] = matrix[i][j] == '0' ? 0 : 1;
        else if (matrix[i][j] == '1') m[i + 1][j] = m[i + 1][j - 1] + 1;
      }
    }
    int ans = 0;
    for (int j = 0; j < col; ++j) {
      stack<int> s;
      for (int i = 0; i < row + 2; ++i) {
        while (!s.empty() && m[i][j] < m[s.top()][j]) {
          int cur = s.top();
          s.pop();
          int left = s.top(), right = i;
          int area = m[cur][j] * (right - left - 1);
          ans = max(ans, area);
        }
        s.push(i);
      }
    }
    return ans;
  }
};