//
// Created by ZiqianCheng on 2021/6/4.
//

/*
 * You have an integer matrix representing a plot of land,
 * where the value at that location represents the height above sea level.
 * A value of zero indicates water.
 * A pond is a region of water connected vertically, horizontally, or diagonally.
 * The size of the pond is the total number of connected water cells.
 * Write a method to compute the sizes of all ponds in the matrix.

Example:

Input:
[
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
]
Output:  [1,2,4]
Note:

0 < len(land) <= 1000
0 < len(land[i]) <= 1000

 */

#include <vector>
#include <queue>
using namespace std;
class Solution {
private:
  int dir[8][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {-1, 1}, {1, -1}, {-1, -1}};
public:
  vector<int> pondSizes(vector<vector<int>>& land) {
    int row = land.size();
    int col = land[0].size();
    vector<vector<bool>> vis(row, vector<bool>(col, false));
    vector<int> ans;
    for (int i = 0; i < row; ++i) {
      for (int j = 0; j < col; ++j) {
        if (!vis[i][j] && land[i][j] == 0) {
          ans.push_back(bfs(i, j, land, vis, row, col));
        }
      }
    }
    sort(ans.begin(), ans.end());
    return ans;
  }
  int bfs(int i, int j, vector<vector<int>>& land, vector<vector<bool>>& vis, int row, int col) {
    int ans = 0;
    queue<pair<int, int>> q;
    q.push(make_pair(i, j));
    vis[i][j] = true;
    while (!q.empty()) {
      pair<int, int> cur = q.front();
      q.pop();
      ans++;
      for (int index = 0; index < 8; ++index) {
        int nextI = cur.first + dir[index][0];
        int nextJ = cur.second + dir[index][1];
        if (nextI < 0 || nextI >= row || nextJ < 0 || nextJ >= col
        || vis[nextI][nextJ] || land[nextI][nextJ] != 0) continue;
        vis[nextI][nextJ] = true;
        q.push(make_pair(nextI, nextJ));
      }
    }
    return ans;
  }
};