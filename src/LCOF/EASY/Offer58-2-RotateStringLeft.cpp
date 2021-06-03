//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

#include <string>
using namespace std;
class Solution {
public:
  string reverseLeftWords(string s, int n) {
    for (int i = 0; i < n; i++) {
      s = s + s[i];
    }
    return s.substr(n);
  }
};