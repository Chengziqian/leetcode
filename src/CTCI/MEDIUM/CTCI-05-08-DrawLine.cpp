//
// Created by ZiqianCheng on 2021/5/28.
//

// MEDIUM https://leetcode-cn.com/problems/draw-line-lcci/

/*
 * A monochrome screen is stored as a single array of int, allowing 32 consecutive pixels to be stored in one int.
 * The screen has width w, where w is divisible by 32 (that is, no byte will be split across rows).
 * The height of the screen, of course, can be derived from the length of the array and the width.
 * Implement a function that draws a horizontal line from (x1, y) to (x2, y).

Given the length of the array, the width of the array (in bit),
 start position x1 (in bit) of the line, end position x2 (in bit) of the line and the row number y of the line,
 return the array after drawing.

Example1:

 Input: length = 1, w = 32, x1 = 30, x2 = 31, y = 0
 Output: [3]
 Explanation: After drawing a line from (30, 0) to (31, 0), the screen becomes [0b000000000000000000000000000000011].
Example2:

 Input: length = 3, w = 96, x1 = 0, x2 = 95, y = 0
 Output: [-1, -1, -1]

 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> drawLine(int length, int w, int x1, int x2, int y) {
    vector<int> ans(length, 0);
    int width = w / 32;
    for (int i = x1; i <= x2; ++i) {
      ans[width * y + (i / 32)] |= (1 << (31 - (i % 32)));
    }
    return ans;
  }
};