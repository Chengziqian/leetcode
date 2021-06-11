//
// Created by 程子骞 on 2021/5/30.
//

#include <string>
using namespace std;
class Solution {
public:
  string maxValue(string n, int x) {
    bool isNegative = n[0] == '-';
    string str = "";
    str.push_back(x + '0');
    if (!isNegative) {
      int i = 0;
      for (; i < n.size(); ++i) {
        if (n[i] - '0' < x) break;
      }
      return n.insert(i, str);
    } else {
      int i = 1;
      for (; i < n.size(); ++i) {
        if (n[i] - '0' > x) break;
      }
      return n.insert(i, str);
    }
  }
};