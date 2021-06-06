//
// Created by ZiqianCheng on 2021/6/2.
//

// HARD https://leetcode-cn.com/problems/intersection-lcci/

/*
 * Given two straight line segments (represented as a start point and an end point),
 * compute the point of intersection, if any.
 * If there's no intersection, return an empty array.

The absolute error should not exceed 10^-6.
 If there are more than one intersections,
 return the one with smallest X axis value.
 If there are more than one intersections that have same X axis value, return the one with smallest Y axis value.
Example 1:

Input:
line1 = {0, 0}, {1, 0}
line2 = {1, 1}, {0, -1}
Output:  {0.5, 0}
Example 2:

Input:
line1 = {0, 0}, {3, 3}
line2 = {1, 1}, {2, 2}
Output:  {1, 1}
Example 3:

Input:
line1 = {0, 0}, {1, 1}
line2 = {1, 0}, {2, 1}
Output:  {}  (no intersection)
Note:

The absolute value of coordinate value will not exceed 2^7.
All coordinates are valid 2D coordinates.

 */
#include <vector>
using namespace std;
class Solution {
public:
  vector<double> intersection(vector<int>& start1, vector<int>& end1, vector<int>& start2, vector<int>& end2) {
    if (start1[0] > end1[0] || (start1[0] == end1[0] && start1[1] > end1[1])) swap(start1, end1);
    if (start2[0] > end2[0] || (start2[0] == end2[0] && start2[1] > end2[1])) swap(start2, end2);
    if (start1[0] > start2[0] || (start1[0] == start2[0] && start1[1] > start2[1])) {
      swap(start1, start2);
      swap(end1, end2);
    }
    if (end1[0] != start1[0] && end2[0] != start2[0]) {
      double k1 = (double)(end1[1] - start1[1]) / (end1[0] - start1[0]);
      double k2 = (double)(end2[1] - start2[1]) / (end2[0] - start2[0]);
      double b1 = start1[1] - k1 * start1[0];
      double b2 = start2[1] - k2 * start2[0];
      if (k1 == k2) {
        if (b1 != b2) return {};
        else {
          if (start2[0] <= end1[0]) return { (double)start2[0], (double)start2[1] };
          else return {};
        }
      }
      double x = (b2 - b1) / (k1 - k2);
      double y = k1 * x + b1;
      if (start1[0] <= x && x <= end1[0] && start2[0] <= x && x <= end2[0]) return { x, y };
      else return {};
    } else if (end1[0] != start1[0]) {
      double k1 = (double)(end1[1] - start1[1]) / (end1[0] - start1[0]);
      double b1 = start1[1] - k1 * start1[0];
      double x = start2[0];
      double y = k1 * x + b1;
      if (start1[0] <= x && x <= end1[0] && start2[1] <= y && y <= end2[1]) return { x, y };
      else return {};
    } else if (end2[0] != start2[0]) {
      double k2 = (double)(end2[1] - start2[1]) / (end2[0] - start2[0]);
      double b2 = start2[1] - k2 * start2[0];
      double x = start1[0];
      double y = k2 * x + b2;
      if (start2[0] <= x && x <= end2[0] && start1[1] <= y && y <= end1[1]) return { x, y };
      else return {};
    } else {
      if (start1[0] == start2[0] && start2[1] <= end1[1]) return { (double)start2[0], (double)start2[1] };
      else return {};
    }
  }
};

int main() {
  Solution s;
  vector<int> start1 = {-10,48};
  vector<int> end1 = {-43,46};
  vector<int> start2 = {-16,59};
  vector<int> end2 = {-1,85};
  s.intersection(start1, end1, start2, end2);
  return 0;

}