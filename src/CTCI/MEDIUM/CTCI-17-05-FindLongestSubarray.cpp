//
// Created by ZiqianCheng on 2021/6/5.
//

// MEDIUM https://leetcode-cn.com/problems/find-longest-subarray-lcci/

/*
 * Given an array filled with letters and numbers,
 * find the longest subarray with an equal number of letters and numbers.

Return the subarray. If there are more than one answer,
 return the one which has the smallest index of its left endpoint.
 If there is no answer, return an empty array.

Example 1:

Input: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]

Output: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
Example 2:

Input: ["A","A"]

Output: []
Note:

array.length <= 100000
 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
  public:
  vector<string> findLongestSubarray(vector<string>& array) {
    int n = array.size();
    unordered_map<int, int> diff;
    diff[0] = -1;
    int wordCount = 0, numberCount = 0;
    int maxLen = 0;
    int ansI = 0, ansJ = 0;
    for (int i = 0; i < n; ++i) {
      if (isNumber(array[i])) numberCount++;
      else wordCount++;
      if (diff.count(wordCount - numberCount)) {
        int preIndex = diff[wordCount - numberCount] + 1
        int len = i - preIndex + 1;
        if (len > maxLen || (len == maxLen && preIndex < ansI)) {
          ansI = preIndex;
          ansJ = i;
          maxLen = len;
        }
      } else {
        diff[wordCount - numberCount] = i;
      }
    }
    vector<string> ans;
    if (maxLen == 0) return ans;
    for (int i = ansI; i <= ansJ; i++) ans.push_back(array[i]);
    return ans;
  }

  bool isNumber(string& s) {
    for (char c: s) if (c < '0' || c > '9') return false;
    return true;
  }
};