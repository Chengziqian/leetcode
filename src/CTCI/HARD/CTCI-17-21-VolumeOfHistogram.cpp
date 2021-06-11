//
// Created by ZiqianCheng on 2021/6/11.
//

// HARD https://leetcode-cn.com/problems/volume-of-histogram-lcci/


/*
 * Imagine a histogram (bar graph).
 * Design an algorithm to compute the volume of water it could hold if someone poured water across the top.
 * You can assume that each histogram bar has width 1.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 In this case, 6 units of water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

 */

#include <vector>
#include <stack>
using namespace std;
class Solution {
public:
  int trap(vector<int>& height) {
    stack<int> s;
    int n = height.size();
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      while (!s.empty() && height[s.top()] < height[i]) {
        int curHeight = height[s.top()];
        s.pop();
        if (s.empty()) break;
        int leftHeight = height[s.top()], rightHeight = height[i];
        ans += (i - s.top() - 1) * (min(leftHeight, rightHeight) - curHeight);
      }
      s.push(i);
    }
    return ans;
  }
};