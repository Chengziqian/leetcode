//
// Created by ZiqianCheng on 2021/6/14.
//

// MEDIUM https://leetcode-cn.com/problems/max-black-square-lcci/

/*
 * Imagine you have a square matrix,
 * where each cell (pixel) is either black or white
 * Design an algorithm to find the maximum subsquare such that all four borders are filled with black pixels.

Return an array [r, c, size], where r, c are the row number and the column number of the subsquare's upper left corner respectively,
 and size is the side length of the subsquare.
 If there are more than one answers, return the one that has smallest r.
 If there are more than one answers that have the same r, return the one that has smallest c.
 If there's no answer, return an empty array.

Example 1:

Input:
[
   [1,0,1],
   [0,0,1],
   [0,0,1]
]
Output: [1,0,2]
Explanation: 0 represents black, and 1 represents white, bold elements in the input is the answer.
Example 2:

Input:
[
   [0,1,1],
   [1,0,1],
   [1,1,0]
]
Output: [0,0,1]
Note:

matrix.length == matrix[0].length <= 200

 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> findSquare(vector<vector<int>>& matrix) {
    int maxSize = 0;
    int ansI, ansJ;
    int n = matrix.size();
    vector<vector<pair<int, int>>> blackCount(n + 1, vector<pair<int, int>>(n + 1));
    for (int i = n - 1; i >= 0; --i) {
      for (int j = n - 1; j >= 0; --j) {
        if (matrix[i][j] == 0) {
          blackCount[i][j].first += blackCount[i + 1][j].first + 1;
          blackCount[i][j].second += blackCount[i][j + 1].second + 1;
        } else {
          blackCount[i][j].first = 0;
          blackCount[i][j].second = 0;
        }
      }
    }
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        int sizeLimit = min(blackCount[i][j].first, blackCount[i][j].second);
        if (sizeLimit <= maxSize) continue;
        for (int s = maxSize + 1; s <= sizeLimit; ++s) {
          if (blackCount[i + s - 1][j].second >= s && blackCount[i][j + s - 1].first >= s) {
            maxSize = s;
            ansI = i;
            ansJ = j;
          }
        }
      }
    }
    if (maxSize == 0) return {};
    return { ansI, ansJ, maxSize };
  }
};