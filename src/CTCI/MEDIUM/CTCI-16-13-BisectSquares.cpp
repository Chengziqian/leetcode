//
// Created by ZiqianCheng on 2021/6/3.
//

// MEDIUM https://leetcode-cn.com/problems/bisect-squares-lcci/

/*
 * Given two squares on a two-dimensional plane, find a line that would cut these two squares in half.
 * Assume that the top and the bottom sides of the square run parallel to the x-axis.

Each square consists of three values, the coordinate of bottom left corner [X,Y] = [square[0],square[1]],
 and the side length of the square square[2].
 The line will intersect to the two squares in four points.
 Return the coordinates of two intersection points [X1,Y1] and [X2,Y2]
 that the forming segment covers the other two intersection points in format of {X1,Y1,X2,Y2}.
 If X1 != X2, there should be X1 < X2, otherwise there should be Y1 <= Y2.

If there are more than one line that can cut these two squares in half,
 return the one that has biggest slope (slope of a line parallel to the y-axis is considered as infinity).

Example:

Input:
square1 = {-1, -1, 2}
square2 = {0, -1, 2}
Output: {-1,0,2,0}
Explanation: y = 0 is the line that can cut these two squares in half.
Note:

square.length == 3
square[2] > 0

 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<double> cutSquares(vector<int>& square1, vector<int>& square2) {
    double center1[2] = { square1[0] + (double)square1[2] / 2, square1[1] + (double)square1[2] / 2 };
    double center2[2] = { square2[0] + (double)square2[2] / 2, square2[1] + (double)square2[2] / 2 };
    int x[4] = { square1[0], square1[0] + square1[2], square2[0], square2[0] + square2[2] };
    int minX = INT_MAX, maxX = INT_MIN;
    for (auto xx: x) {
      minX = min(minX, xx);
      maxX = max(maxX, xx);
    }
    int y[4] = { square1[1], square1[1] + square1[2], square2[1], square2[1] + square2[2] };
    int minY = INT_MAX, maxY = INT_MIN;
    for (auto yy: y) {
      minY = min(minY, yy);
      maxY = max(maxY, yy);
    }
    if (center1[0] == center2[0]) {
      return { (double)center1[0], (double)minY, (double)center1[0], (double)maxY };
    } else {
      double k = (double)(center2[1] - center1[1]) / (center2[0] - center1[0]);
      double b = center1[1] - k * center1[0];
      if (abs(k) <= 1) {
        return { (double)minX, k * minX + b, (double)maxX, k * maxX + b };
      } else {
        double point1[2] = { (minY - b) / k, (double)minY };
        double point2[2] = { (maxY - b) / k, (double)maxY };
        if (point1[0] < point2[0]) {
          return { point1[0], point1[1], point2[0], point2[1] };
        } else {
          return { point2[0], point2[1], point1[0], point1[1] };
        }
      }
    }
  }
};