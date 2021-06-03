//
// Created by ZiqianCheng on 2021/6/1.
//

// EASY https://leetcode-cn.com/problems/sparse-array-search-lcci/

/*
 * Given a sorted array of strings that is interspersed with empty strings,
 * write a method to find the location of a given string.

Example1:

 Input: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 Output: -1
 Explanation: Return -1 if s is not in words.
Example2:

 Input: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 Output: 4
Note:

1 <= words.length <= 1000000
 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  int findString(vector<string>& words, string s) {
    int n = words.size();
    int left = 0, right = n - 1;
    while (left <= right) {
      int mid = (left + right) / 2;
      if (!words[mid].size()) {
        int leftBound = mid, rightBound = mid;
        while (leftBound >= 0 && !words[leftBound].size()) leftBound--;
        while (rightBound < n && !words[rightBound].size()) rightBound++;
        if (leftBound >= 0 && s == words[leftBound]) return leftBound;
        if (rightBound < n && s == words[rightBound]) return rightBound;
        if (leftBound >= 0 && s < words[leftBound]) right = leftBound - 1;
        else if (rightBound < n && s > words[rightBound]) left = rightBound + 1;
        else return -1;
      } else if (s == words[mid]) return mid;
      else if (s > words[mid]) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
};