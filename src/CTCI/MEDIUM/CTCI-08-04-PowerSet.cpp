//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/power-set-lcci/

/*
 * Write a method to return all subsets of a set. The elements in a set are pairwise distinct.

Note: The result set should not contain duplicated subsets.

Example:

 Input:  nums = [1,2,3]
 Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<vector<int>> subsets(vector<int>& nums) {
    int n = nums.size();
    int mask = 1 << n;
    vector<vector<int>> ans;
    for (int i = 0; i < mask; ++i) {
      vector<int> cur;
      for (int k = 0; k < n; ++k) {
        if (i & (1 << k)) cur.push_back(nums[k]);
      }
      ans.push_back(cur);
    }
    return ans;
  }
};