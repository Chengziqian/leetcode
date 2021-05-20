// 05/18/2021 EASY

// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/


#include <vector>
using namespace std;
class Solution {
public:
    vector<int> exchange(vector<int>& nums) {
      int n = nums.size();
      int slow = 0, fast = 0;
      while (fast < n) {
        if (nums[fast] & 1) swap(nums[slow++], nums[fast]);
        fast++;
      }
      return nums;
    }
};