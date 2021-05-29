//
// Created by ZiqianCheng on 2021/5/29.
//

// EASY https://leetcode-cn.com/problems/color-fill-lcci/

/*
 * Implement the "paint fill" function that one might see on many image editing programs.
 * That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color,
 * fill in the surrounding area until the color changes from the original color.

Example1:

Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
 */

#include <vector>
#include <queue>
using namespace std;
class Solution {
public:
  vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
    int row = image.size();
    int col = image[0].size();
    queue<pair<int, int>> q;
    vector<vector<int>> direction = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    int originalColor = image[sr][sc];
    vector<vector<bool>> vis(row, vector<bool>(col, false));
    q.push({sr, sc});
    while (!q.empty()) {
      pair<int, int> cur = q.front();
      q.pop();
      image[cur.first][cur.second] = newColor;
      vis[cur.first][cur.second] = true;
      for (int i = 0; i < 4; ++i) {
        int ni = cur.first + direction[i][0];
        int nj = cur.second + direction[i][1];
        if (ni < 0 || ni >= row || nj < 0 || nj >= col || vis[ni][nj] || image[ni][nj] != originalColor) {
          continue;
        }
        q.push(make_pair(ni, nj));
      }
    }
    return image;
  }
};