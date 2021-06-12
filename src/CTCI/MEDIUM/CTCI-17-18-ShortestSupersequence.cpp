//
// Created by ZiqianCheng on 2021/6/10.
//

// MEDIUM https://leetcode-cn.com/problems/shortest-supersequence-lcci/

/*
 * You are given two arrays, one shorter (with all distinct elements) and one longer.
 * Find the shortest subarray in the longer array that contains all the elements in the shorter array.
 * The items can appear in any order.

Return the indexes of the leftmost and the rightmost elements of the array.
 If there are more than one answer, return the one that has the smallest left index.
 If there is no answer, return an empty array.

Example 1:

Input:
big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
small = [1,5,9]
Output: [7,10]
Example 2:

Input:
big = [1,2,3]
small = [4]
Output: []
Note:

big.length <= 100000
1 <= small.length <= 100000
 */

#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Solution {
public:
  vector<int> shortestSeq(vector<int>& big, vector<int>& small) {
    unordered_map<int, int> record;
    int diff = 0;
    for (auto n: small) {
      record[n]++;
      diff++;
    }
    int minLen = INT_MAX;
    int ansLeft, ansRight;
    int left = 0, right = 0;
    int n = big.size();
    while (right < n) {
      if (record.count(big[right])) {
        record[big[right]]--;
        if (record[big[right]] >= 0) diff--;
      }
      right++;
      while (!diff) {
        if (minLen > right - left || (minLen == right - left && left < ansLeft)) {
          minLen = right - left;
          ansLeft = left;
          ansRight = right - 1;
        }
        if (record.count(big[left])) {
          record[big[left]]++;
          if (record[big[left]] > 0) diff++;
        }
        left++;
      }
    }
    if (minLen == INT_MAX) return {};
    else return {ansLeft, ansRight};
  }
};