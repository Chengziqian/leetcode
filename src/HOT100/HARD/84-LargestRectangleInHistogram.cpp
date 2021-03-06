//
// Created by ZiqianCheng on 2021/6/30.
//

// HARD https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

/*
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104

 */


#include <vector>
#include <stack>
using namespace std;
class Solution {
public:
  int largestRectangleArea(vector<int>& heights) {
    stack<int> s;
    heights.insert(heights.begin(), 0);
    heights.push_back(0);
    int n = heights.size();
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      while (!s.empty() && heights[i] < heights[s.top()]) {
        int cur = s.top();
        s.pop();
        if (s.empty()) break;
        int left = s.top(), right = i;
        int area = heights[cur] * (right - left - 1);
        ans = max(ans, area);
      }
      s.push(i);
    }
    return ans;
  }
};