//
// Created by ZiqianCheng on 2021/6/7.
//

// MEDIUM https://leetcode-cn.com/problems/find-closest-lcci

/*
 * You have a large text file containing words.
 * Given any two words, find the shortest distance (in terms of number of words) between them in the file.
 * If the operation will be repeated many times for the same file (but different pairs of words),
 * can you optimize your solution?

Example:

Input: words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
Output: 1
Note:

words.length <= 100000

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  int findClosest(vector<string>& words, string word1, string word2) {
    vector<int> indexWord1, indexWord2;
    for (int i = 0; i < words.size(); ++i) {
      if (words[i] == word1) indexWord1.push_back(i);
      if (words[i] == word2) indexWord2.push_back(i);
    }
    int left = 0, right = 0;
    int ans = INT_MAX;
    while (left < indexWord1.size() && right < indexWord2.size()) {
      ans = min(ans, abs(indexWord2[right] - indexWord1[left]));
      if (indexWord1[left] < indexWord2[right]) left++;
      else if (indexWord1[left] > indexWord2[right]) right++;
      else return 0;
    }
    return ans;
  }
};