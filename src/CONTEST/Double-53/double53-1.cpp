//
// Created by 程子骞 on 2021/5/29.
//

#include <string>
using namespace srd;
class Solution {
public:
  int countGoodSubstrings(string s) {
    int left = 0, right = 2;
    int ans = 0;
    while (right < s.size()) {
      if (s[left] != s[left + 1] && s[left + 1] != s[left + 2] && s[left] != s[left + 2]) ans++;
      left++;
      right++;
    }
    return ans;
  }
};