//
// Created by 程子骞 on 2021/5/29.
//

#include <vector>
using namespace std;
class Solution {
public:
  int minPairSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int ans = INT_MIN;
    int n = nums.size();
    for (int i = 0; i * 2 < n; ++i) {
      ans = max(ans, nums[i] + nums[n - 1 - i]);
    }
    return ans;
  }
};