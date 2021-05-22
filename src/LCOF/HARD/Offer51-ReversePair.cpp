//
// Created by ZiqianCheng on 2021/5/21.
//

// HARD https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int reversePairs(vector<int>& nums) {
    int ans = 0;
    merge(nums, 0, nums.size() - 1, ans);
    return ans;
  }

  void merge(vector<int>& nums, int start, int end, int& ans) {
    if (start >= end) return;
    int mid = (start + end) / 2;
    merge(nums, start, mid, ans);
    merge(nums, mid + 1, end, ans);
    int left = start, right = mid + 1;
    vector<int> tmp;
    while (left <= mid || right <= end) {
      if (left > mid) {
        while (right <= end) tmp.push_back(nums[right++]);
        break;
      }
      if (right > end) {
        while (left <= mid) tmp.push_back(nums[left++]);
        break;
      }
      if (nums[left] <= nums[right]) {
        tmp.push_back(nums[left++]);
      } else {
        ans += mid - left + 1;
        tmp.push_back(nums[right++]);
      }
    }
    for (int i = 0; i < tmp.size(); ++i) {
      nums[start + i] = tmp[i];
    }
  }
};

int main() {
  Solution s;
  vector<int> t{7, 5, 6, 4};
  cout << s.reversePairs(t) << endl;
  return 0;
}