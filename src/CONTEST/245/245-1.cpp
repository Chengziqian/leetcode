//
// Created by 程子骞 on 2021/6/13.
//

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  bool makeEqual(vector<string>& words) {
    vector<int> count(26, 0);
    if (words.size() <= 1) return false;
    for (auto str: words) {
      for (auto c: str) {
        count[c - 'a']++;
      }
    }
    for (int i = 0; i < 26; ++i) {
      if (count[i] != words.size()) return false;
    }
    return true;
  }
};