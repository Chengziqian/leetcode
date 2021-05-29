//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/bianry-number-to-string-lcci/

/*
 * Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double,
 * print the binary representation.
 * If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR".

Example1:

 Input: 0.625
 Output: "0.101"
Example2:

 Input: 0.1
 Output: "ERROR"
 Note: 0.1 cannot be represented accurately in binary.
Note:

This two charaters "0." should be counted into 32 characters.

 */
#include <string>
using namespace std;
class Solution {
public:
  string printBin(double num) {
    string ans = "0.";
    while (num != 1.0) {
      num *= 2;
      if (num >= 1.0) {
        ans += '1';
        if (num == 1.0) break;
        num -= 1;
      } else {
        ans += '0';
      }
      cout << ans << endl;
      if (ans.size() > 32) return "ERROR";
    }
    return ans;
  }
};