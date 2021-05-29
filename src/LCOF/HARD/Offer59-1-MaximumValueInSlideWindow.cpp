//
// Created by ZiqianCheng on 2021/5/24.
//

// HARD https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/

#include <vector>
#include <deque>
using namespace std;
class Solution {
public:
  vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    int n = nums.size();
    int left = 0;
    vector<int> ans;
    for (int right = 0; right < n; ++right) {
      while (!dq.empty() && nums[dq.back()] < nums[right]) dq.pop_back();
      dq.push_back(right);
      if (right >= k - 1) {
        while (!dq.empty() && dq.front() < left) dq.pop_front();
        ans.push_back(nums[dq.front()]);
        left++;
      }
    }
    return ans;
  }
};