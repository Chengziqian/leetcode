//
// Created by 程子骞 on 2021/6/20.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  string largestOddNumber(string num) {
    int n = num.size();
    int lastIndex = -1;
    for (int i = 0; i < n; ++i) {
      if ((num[i] - '0') & 1) lastIndex = i;
    }
    return num.substr(0, lastIndex + 1);
  }
};