//
// Created by ZiqianCheng on 2021/5/29.
//

// HARD https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/

/*
 * Given a matrix and a target, return the number of non-empty submatrices that sum to target.

A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

Example 1:


Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.
Example 2:

Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
Example 3:

Input: matrix = [[904]], target = 0
Output: 0
 

Constraints:

1 <= matrix.length <= 100
1 <= matrix[0].length <= 100
-1000 <= matrix[i] <= 1000
-10^8 <= target <= 10^8

 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
public:
  int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
    int row = matrix.size();
    int col = matrix[0].size();
    vector<vector<int>> sum(row + 1, vector<int>(col + 1, 0));
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + matrix[i][j];
      }
    }
    int ans = 0;
    for (int r1 = 0; r1 < row; ++r1) {
      for (int r2 = r1; r2 < row; ++r2) {
        unordered_map<int, int> count;
        count[0] = 1;
        for (int c = 0; c < col; ++c) {
          int curSum = sum[r2 + 1][c + 1] - sum[r1][c + 1] - sum[r2 + 1][0] + sum[r1][0];
          ans += count[curSum - target];
          count[curSum]++;
        }
      }
    }
    return ans;
  }
};