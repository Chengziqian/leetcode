// 05/17/2021 EASY

// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

/*
<-- s = "We are happy."
--> "We%20are%20happy."
*/

#include <string>
using namespace std;
class Solution {
public:
    string replaceSpace(string s) {
      string ans = "";
      for (auto c: s) {
        if (c == ' ') ans += "%20";
        else ans += c;
      }
      return ans;
    }
};