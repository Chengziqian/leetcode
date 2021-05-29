//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/permutations/

/*
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

 */

#include <vector>
#include <deque>
using namespace std;
class Solution {
public:
  vector<vector<int>> permute(vector<int>& nums) {
    deque<int> dq;
    for (auto n: nums) dq.push_back(n);
    vector<vector<int>> ans;
    vector<int> path;
    dfs(dq, ans, path);
    return ans;
  }

  void dfs(deque<int> dq, vector<vector<int>>& ans, vector<int>& path) {
    if (dq.empty()) {
      ans.push_back(path);
      return;
    }
    int size = dq.size();
    while (size--) {
      int cur = dq.front();
      dq.pop_front();
      path.push_back(cur);
      dfs(dq, ans, path);
      dq.push_back(cur);
      path.pop_back();
    }
  }
};