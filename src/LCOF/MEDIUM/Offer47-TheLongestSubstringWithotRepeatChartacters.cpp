//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

#include <string>
#include <unordered_set>
#include <algorithm>
using namespace std;
class Solution {
public:
  int lengthOfLongestSubstring(string s) {
    int left = 0, right = 0;
    int n = s.size();
    int ans = 0;
    unordered_set<char> rc;
    while (right < n) {
      if (rc.count(s[right])) {
        rc.erase(s[left]);
        left++;
      } else {
        rc.emplace(s[right]);
        right++;
      }
      ans = max(ans, right - left);
    }
    return ans;
  }
};