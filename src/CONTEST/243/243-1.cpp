//
// Created by 程子骞 on 2021/5/30.
//

#include <string>
using namespace std;
class Solution {
public:
  bool isSumEqual(string firstWord, string secondWord, string targetWord) {
    return getNumber(firstWord) + getNumber(secondWord) == getNumber(targetWord);
  }

  int getNumber(string str) {
    int ans = 0;
    for (auto c: str) {
      ans = ans * 10 + (c - 'a');
    }
    return ans;
  }
};