//
// Created by ZiqianCheng on 2021/7/8.
//

// MEDIUM https://leetcode-cn.com/problems/maximum-product-subarray

/*
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int maxProduct(vector<int>& nums) {
    int minDp = nums[0], maxDp = nums[0], ans = nums[0];
    for (int i = 1; i < nums.size(); ++i) {
      int maxValue = maxDp, minValue = minDp;
      maxDp = max(maxValue * nums[i], max(nums[i], minValue * nums[i]));
      minDp = min(minValue * nums[i], min(nums[i], maxValue * nums[i]));
      ans = max(ans, maxDp);
    }
    return ans;
  }
};