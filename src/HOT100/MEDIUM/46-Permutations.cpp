//
// Created by ZiqianCheng on 2021/6/22.
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
using namespace std;

class Solution {
private:
  vector<vector<int>> ans;
public:
  vector<vector<int>> permute(vector<int>& nums) {
    int n = nums.size();
    vector<bool> vis(n, false);
    vector<int> path;
    dfs(path, nums, vis);
    return ans;
  }

  void dfs(vector<int>& path, vector<int>& nums, vector<bool>& vis) {
    if (path.size() == nums.size()) {
      ans.push_back(path);
      return;
    }
    for (int i = 0; i < nums.size(); ++i) {
      if (!vis[i]) {
        vis[i] = true;
        path.push_back(nums[i]);
        dfs(path, nums, vis);
        path.pop_back();
        vis[i] = false;
      }
    }
  }
};