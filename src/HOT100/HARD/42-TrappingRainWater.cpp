//
// Created by ZiqianCheng on 2021/6/22.
//

// HARD https://leetcode-cn.com/problems/trapping-rain-water/

/*
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
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
        int cur = height[s.top()];
        s.pop();
        if (s.empty()) break;
        int leftIndex = s.top();
        int rightIndex = i;
        ans += (rightIndex - leftIndex - 1) * (min(height[leftIndex], height[rightIndex]) - cur);
      }
      s.push(i);
    }
    return ans;
  }
};