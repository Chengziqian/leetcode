//
// Created by 程子骞 on 2021/5/23.
//

#include <string>
using namespace std;
class Solution {
public:
  bool checkZeroOnes(string s) {
    int maxOne = 0, maxZero = 0;
    int curOne = 0, curZero = 0;
    for (int i = 0; i < s.size(); i++) {
      if (s[i] == '1') {
        curOne++;
        maxZero = max(maxZero, curZero);
        curZero = 0;
      } else {
        curZero++;
        maxOne = max(maxOne, curOne);
        curOne = 0;
      }
    }
    maxOne = max(maxOne, curOne);
    maxZero = max(maxZero, curZero);
    return maxOne > maxZero;
  }
};