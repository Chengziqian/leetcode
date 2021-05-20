// 05/17/2021 EASY

// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

/*
<-- [2, 3, 1, 0, 2, 5, 3]
--> 2 或 3 
*/

#include <vector>
using namespace std;
class Solution {
public:
    int findRepeatNumber(vector<int>& nums) {
      int n = nums.size();
      for (int i = 0; i < n; ++i) {
        while (nums[i] != i) {
          if (nums[i] == nums[nums[i]]) return nums[i];
          swap(nums[nums[i]], nums[i]);
        }
      }
      return -1;
    }
};