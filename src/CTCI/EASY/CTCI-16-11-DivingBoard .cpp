//
// Created by ZiqianCheng on 2021/6/3.
//

// EASY https://leetcode-cn.com/problems/diving-board-lcci/

/*
 * You are building a diving board by placing a bunch of planks of wood end-to-end.
 * There are two types of planks, one of length shorter and one of length longer.
 * You must use exactly K planks of wood. Write a method to generate all possible lengths for the diving board.

return all lengths in non-decreasing order.

Example:

Input:
shorter = 1
longer = 2
k = 3
Output:  {3,4,5,6}
Note:

0 < shorter <= longer
0 <= k <= 100000

 */

#include <vector>
#include <unordered_set>
using namespace std;
class Solution {
public:
  vector<int> divingBoard(int shorter, int longer, int k) {
    if (!k) return {};
    unordered_set<int> rc;
    vector<int> ans;
    for (int i = 0; i <= k; ++i) {
      int current = i * longer + (k - i) * shorter;
      if (!rc.count(current)) {
        rc.insert(current);
        ans.push_back(current);
      }
    }
    return ans;
  }
};