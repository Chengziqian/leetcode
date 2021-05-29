//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  int search(vector<int>& nums, int target) {
    int n = nums.size();
    int left = 0, right = n - 1;
    int lowerIndex;
    int upperIndex;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    lowerIndex = left;
    left = 0, right = n - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    upperIndex = right;
    return upperIndex - lowerIndex + 1;
  }
};