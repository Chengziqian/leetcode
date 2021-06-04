//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/pattern-matching-lcci/

/*
 * You are given two strings, pattern and value.
 * The pattern string consists of just the letters a and b,
 * describing a pattern within a string.
 * For example, the string catcatgocatgo matches the pattern aabab (where cat is a and go is b).
 * It also matches patterns like a, ab, and b.
 * Write a method to determine if value matches pattern.
 * a and b cannot be the same string.

Example 1:

Input:  pattern = "abba", value = "dogcatcatdog"
Output:  true
Example 2:

Input:  pattern = "abba", value = "dogcatcatfish"
Output:  false
Example 3:

Input:  pattern = "aaaa", value = "dogcatcatdog"
Output:  false
Example 4:

Input:  pattern = "abba", value = "dogdogdogdog"
Output:  true
Explanation:  "a"="dogdog",b=""，vice versa.
Note:

0 <= len(pattern) <= 1000
0 <= len(value) <= 1000
pattern only contains "a" and "b", value only contains lowercase letters.
 */

#include <string>
using namespace std;
class Solution {
public:
  bool patternMatching(string pattern, string value) {
    int patternSize = pattern.size();
    int valueSize = value.size();
    if (pattern.empty()) return value.empty();
    if (value.empty()) {
      int i = 0;
      while (i + 1 < patternSize && pattern[i] == pattern[i + 1]) i++;
      return i + 1 == patternSize;
    }
    int countA = 0, countB = 0;
    for (auto c: pattern) {
      if (c == 'a') countA++;
      if (c == 'b') countB++;
    }
    if (!countA) return canSingleSplit(value, countB);
    if (!countB) return canSingleSplit(value, countA);
    if (canSingleSplit(value, countA) || canSingleSplit(value, countB)) return true;
    for (int aLen = 1; valueSize - countA * aLen > 0; ++aLen) {
      if ((valueSize - countA * aLen) % countB != 0) continue;
      int bLen = (valueSize - countA * aLen) / countB;
      if (check(value, pattern, aLen, bLen)) return true;
    }
    return false;
  }

  bool canSingleSplit(const string& value, int count) {
    int n = value.size();
    if (n % count != 0) return false;
    int len = n / count;
    for (int i = 0; i + len * 2 <= n; i += len) {
      if (value.substr(i, len) != value.substr(i + len, len)) return false;
    }
    return true;
  }
  bool check(const string& value, const string& pattern, int aLen, int bLen) {
    string aStr, bStr;
    int index = 0;
    for (int i = 0; i < pattern.size(); ++i) {
      if (pattern[i] == 'a') {
        if (aStr.empty()) {
          aStr = value.substr(index, aLen);
        } else {
          if (value.substr(index, aLen) != aStr) return false;
        }
        index += aLen;
      } else {
        if (bStr.empty()) {
          bStr = value.substr(index, bLen);
        } else {
          string a = value.substr(index, bLen);
          if (value.substr(index, bLen) != bStr) return false;
        }
        index += bLen;
      }
    }
    return aStr != bStr;
  }
};

int main() {
  Solution s;
  s.patternMatching("abba", "dogdogdogdog");
  return 0;
}