// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/partition-equal-subset-sum/

/*
Given a non-empty array nums containing only positive integers, 
find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100

*/
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
    bool canPartition(vector<int>& nums) {
      int sum = 0;
      int n = nums.size();
      for (int i = 0; i < n; i++) sum += nums[i];
      if (sum & 1) return false;
      int target = sum >> 1;
      int dp[10001] = {0};
      dp[0] = 1;
      for (int i = 1; i <= n; i++) {
        for (int j = target; j >= nums[i - 1]; j--) {
          dp[j] = dp[j] || dp[j - nums[i - 1]];
        }
      }
      return dp[target];
    }
};

int main() {
  return 0;
}