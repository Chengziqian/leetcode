//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  int missingNumber(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] != mid) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  }
};