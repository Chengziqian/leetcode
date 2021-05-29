//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

class Solution {
public:
  int lastRemaining(int n, int m) {
    int ans = 0;
    for (int k = 2; k <= n; ++k) {
      ans = (ans + m) % k;
    }
    return ans + 1;
  }
};