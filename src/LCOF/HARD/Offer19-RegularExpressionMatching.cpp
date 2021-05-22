// 05/18/2021 HARD

// https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/

/*
s = "mississippi"
p = "mis*is*p*."
*/

#include <iostream>
#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  bool isMatch(string s, string p) {
    vector<string> capture;
    string cur = "";
    for (int i = 0; i < p.size(); ++i) {
      string cur = "";
      if (i + 1 < p.size() && p[i + 1] == '*') {
        cur = cur + p[i] + '*';
        capture.push_back(cur);
        i++;
      } else {
        cur += p[i];
        capture.push_back(cur);
      }
    }
    if (cur.size())
      capture.push_back(cur);
    return dfs(s, 0, capture, 0);
  }
  bool dfs(string &s, int stringIndex, vector<string> &capture,
           int captureIndex) {
    if (stringIndex == s.size() && captureIndex == capture.size())
      return true;
    if (captureIndex >= capture.size())
      return false;
    string captureString = capture[captureIndex];
    if (captureString[captureString.size() - 1] == '*') {
      if (dfs(s, stringIndex, capture, captureIndex + 1))
        return true;
      int ci = 0;
      for (int si = stringIndex; si < s.size(); ++si) {
        if (captureString[ci] != '.' && s[si] != captureString[ci])
          return false;
        ci++;
        if (ci % (captureString.size() - 1) == 0) {
          if (dfs(s, si + 1, capture, captureIndex + 1))
            return true;
          else
            ci = 0;
        }
      }
    } else {
      int si = stringIndex;
      for (int ci = 0; ci < captureString.size(); ++ci) {
        if (si >= s.size())
          return false;
        if (captureString[ci] != '.' && s[si] != captureString[ci])
          return false;
        si++;
      }
      return dfs(s, si, capture, captureIndex + 1);
    }
    return false;
  }
};

int main() {
  Solution s;
  cout << s.isMatch("aa", "a") << endl;
  cout << s.isMatch("aa", "a*") << endl;
  cout << s.isMatch("ab", ".*") << endl;
  cout << s.isMatch("aab", "c*a*b") << endl;
  cout << s.isMatch("mississippi", "mis*is*p*.") << endl;
  cout << s.isMatch("mississippi", "mis*is*ip*.") << endl;
  return 0;
}