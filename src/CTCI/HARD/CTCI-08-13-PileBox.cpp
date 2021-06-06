//
// Created by ZiqianCheng on 2021/5/31.
//

// HARD https://leetcode-cn.com/problems/pile-box-lcci/

/*
 * You have a stack of n boxes, with widths wi, depths di, and heights hi.
 * The boxes cannot be rotated and can only be stacked on top of one another
 * if each box in the stack is strictly larger than the box above it in width, height, and depth.
 * Implement a method to compute the height of the tallest possible stack.
 * The height of a stack is the sum of the heights of each box.

The input use [wi, di, hi] to represents each box.

Example1:

 Input: box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
 Output: 6
Example2:

 Input: box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
 Output: 10
Note:

box.length <= 3000

 */
#include <vector>
using namespace std;
class Solution {
public:
  int pileBox(vector<vector<int>>& box) {
    int n = box.size();
    sort(box.begin(), box.end(), [](const vector<int>& a, const vector<int>b) { return a[0] > b[0]; });
    vector<int> dp(n, 0);
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      dp[i] = box[i][2];
      for (int j = 0; j < i; ++j) {
        if (box[j][0] > box[i][0] && box[j][1] > box[i][1] && box[j][2] > box[i][2]) {
          dp[i] = max(dp[i], dp[j] + box[i][2]);
        }
      }
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};