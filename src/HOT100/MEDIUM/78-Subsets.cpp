//
// Created by ZiqianCheng on 2021/6/29.
//

// MEDIUM https://leetcode-cn.com/problems/subsets

/*
 * Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

 */

#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<int>> subsets(vector<int>& nums) {
    int n = nums.size();
    int set = 1 << n;
    vector<vector<int>> ans;
    for (int sub = 0; sub < set; ++sub) {
      vector<int> cur;
      for (int k = 0; k < n; ++k) {
        if (sub & (1 << k)) cur.emplace_back(nums[k]);
      }
      ans.emplace_back(cur);
    }
    return ans;
  }
};