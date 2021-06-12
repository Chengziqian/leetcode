//
// Created by 程子骞 on 2021/6/6.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  int minFlips(string s) {
    return min(count(s, true), count(s, false));
  }

  int count(string& s, bool isZeroFirst) {
    bool flag = isZeroFirst;
    int ans = 0;
    for (auto c: s) {
      if ((flag && c == '1') || (!flag && c == '0')) ans++;
      flag = !flag;
    }
    return ans;
  }
};