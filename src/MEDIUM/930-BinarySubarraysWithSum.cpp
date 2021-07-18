//
// Created by ZiqianCheng on 2021/7/8.
//

// MEDIUM https://leetcode-cn.com/problems/binary-subarrays-with-sum

/*
 * Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

 

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15
 

Constraints:

1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length
 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
public:
  int numSubarraysWithSum(vector<int>& nums, int goal) {
    int n = nums.size();
    unordered_map<int, int> preSumCount;
    preSumCount[0] = 1;
    int curSum = 0, ans = 0;
    for (int i = 0; i < n; ++i) {
      curSum += nums[i];
      if (preSumCount.count(curSum - goal)) {
        ans += preSumCount[curSum - goal];
      }
      preSumCount[curSum]++;
    }
    return ans;
  }
};