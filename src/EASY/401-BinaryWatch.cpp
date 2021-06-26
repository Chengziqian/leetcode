//
// Created by ZiqianCheng on 2021/6/21.
//

// EASY https://leetcode-cn.com/problems/binary-watch

/*
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".


Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must be consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".
 

Example 1:

Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
Example 2:

Input: turnedOn = 9
Output: []
 

Constraints:

0 <= turnedOn <= 10

 */

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  vector<string> readBinaryWatch(int turnedOn) {
    int mask = 1 << 10;
    vector<string> ans;
    for (int i = 0; i < mask; ++i) {
      if (__builtin_popcount(i) == turnedOn) {
        string cur = convertTime(i);
        if (!cur.empty()) ans.push_back(cur);
      }
    }
    return ans;
  }

  string convertTime(int bit) {
    int hour = bit >> 6;
    int min = bit & 0b0000111111;
    if (hour > 11 || min > 59) return "";
    string hourStr = to_string(hour);
    string minStr = min < 10 ? "0" + to_string(min) : to_string(min);
    return hourStr + ":" + minStr;
  }
};