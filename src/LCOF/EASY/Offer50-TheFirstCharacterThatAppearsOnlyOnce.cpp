//
// Created by ZiqianCheng on 2021/5/21.
//

// EASY https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

#include <unordered_map>
using namespace std;
class Solution {
public:
  char firstUniqChar(string s) {
    unordered_map<char, int> rc;
    for (auto c : s) rc[c]++;
    for (auto c : s) if (rc[c] == 1) return c;
    return ' ';
  }
};