//
// Created by ZiqianCheng on 2021/6/29.
//

// HARD https://leetcode-cn.com/problems/minimum-window-substring

/*
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every character in t (including duplicates)
 * is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

 */

#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <string>
using namespace std;
class Solution {
public:
  string minWindow(string s, string t) {
    unordered_map<char, int> count;
    int diff = 0;
    for (auto c: t) {
      count[c]++;
      diff++;
    }
    int n = s.size();
    int left = 0, right = 0;
    int len = INT_MAX;
    int start = 0;
    while (right < n) {
      if (count.count(s[right])) {
        count[s[right]]--;
        if (count[s[right]] >= 0) diff--;
      }
      right++;
      if (!diff) {
        while (!diff) {
          if (count.count(s[left])) {
            count[s[left]]++;
            if (count[s[left]] > 0) diff++;
          }
          left++;
        }
        if (right - left + 1 < len) {
          len = right - left + 1;
          start = left - 1;
        }
      }
    }
    return len == INT_MAX ? "" : s.substr(start, len);
  }
};