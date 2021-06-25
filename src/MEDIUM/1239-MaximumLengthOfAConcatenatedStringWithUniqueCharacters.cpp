//
// Created by ZiqianCheng on 2021/6/19.
//

// MEDIUM https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/*
 * Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

 

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
 

Constraints:

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] contains only lower case English letters.

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
private:
  int ans = 0;
public:
  int maxLength(vector<string>& arr) {
    vector<int> count(26, 0);
    dfs(arr, 0, count, 0);
    return ans;
  }

  void dfs(vector<string>& arr, int index, vector<int>& count, int len) {
    if (index == arr.size()) return;
    for (int i = index; i < arr.size(); ++i) {
      vector<int> currentCount = count;
      for (auto c: arr[i]) currentCount[c - 'a']++;
      int k = 0;
      while (k < 26 && currentCount[k] <= 1) k++;
      if (k == 26) {
        ans = max(ans, len + (int)arr[i].size());
        dfs(arr, i + 1, currentCount, len + arr[i].size());
      }
    }
  }
};


class Solution2 {
public:
  int maxLength(vector<string>& arr) {
    vector<int> masks = {0};
    int ans = 0;
    for (auto& str: arr) {
      int mask = 0;
      for (auto c: str) {
        if (mask & (1 << (c - 'a'))) {
          mask = 0;
          break;
        }
        mask |= 1 << (c - 'a');
      }
      if (mask == 0) continue;
      for (int i = 0; i < masks.size(); ++i) {
        if ((masks[i] & mask) == 0) {
          masks.push_back(mask | masks[i]);
          ans = max(ans, __builtin_popcount(mask | masks[i]));
        }
      }
    }
  }
};