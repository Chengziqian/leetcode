// 05/14/2021 MEDIUM

// https://leetcode-cn.com/problems/jump-game-ii/

/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. 
Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 105

*/
#include <vector>
#include <algorithm>
using namespace std;
const int INF = 1e3 + 1;
class Solution {
  public:
    int jump(vector<int>& nums) {
      int n = nums.size();
      vector<int> memo(n, INF);
      memo[n - 1] = 0;
      return dfs(0, memo, nums);
    }
    int dfs(int index, vector<int>& memo, vector<int>& nums) {
      if (index >= nums.size()) return INF;
      if (memo[index] != INF) return memo[index];
      for (int i = 1; i <= nums[index]; ++i) {
        memo[index] = min(memo[index], dfs(index + i, memo, nums) + 1);
      }
      return memo[index];
    }
};