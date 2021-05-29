//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/

class Solution {
public:
  int add(int a, int b) {
    int c;
    while (b) {
      c = (unsigned int)(a & b) << 1;
      a ^= b;
      b = c;
    }
    return a;
  }
};