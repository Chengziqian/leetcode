//
// Created by ZiqianCheng on 2021/6/3.
//

// MEDIUM https://leetcode-cn.com/problems/contiguous-array/

/*
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
public:
  int findMaxLength(vector<int>& nums) {
    int n = nums.size();
    int ans = 0, preSum = 0;
    unordered_map<int, int> rc;
    rc[0] = -1;
    for (int i = 0; i < n; ++i) {
      preSum += (nums[i] == 0 ? -1 : 1);
      if (rc.count(preSum)) ans = max(ans, i - rc[preSum]);
      else rc[preSum] = i;
    }
    return ans;
  }
};
