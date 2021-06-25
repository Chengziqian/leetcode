//
// Created by ZiqianCheng on 2021/6/22.
//

// EASY  https://leetcode-cn.com/problems/maximum-subarray/

/*
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

#include <vector>
using namespace std;
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    int dp = 0;
    int ans = INT_MIN;
    int n = nums.size();
    for (int i = 0; i < n; ++i) {
      dp = max(dp + nums[i], nums[i]);
      ans = max(ans, dp);
    }
    return ans;
  }
};