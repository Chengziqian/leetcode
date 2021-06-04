//
// Created by ZiqianCheng on 2021/6/4.
//

// EASY https://leetcode-cn.com/problems/contiguous-sequence-lcci/

/*
 * You are given an array of integers (both positive and negative).
 * Find the contiguous sequence with the largest sum. Return the sum.

Example:

Input:  [-2,1,-3,4,-1,2,1,-5,4]
Output:  6
Explanation:  [4,-1,2,1] has the largest sum 6.
Follow Up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

#include <vector>
using namespace std;
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    int n = nums.size();
    int index = 0;
    int currentSum = 0;
    int ans = INT_MIN;
    while (index < n) {
      currentSum += nums[index++];
      ans = max(ans, currentSum);
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return ans;
  }
};