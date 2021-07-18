//
// Created by 程子骞 on 2021/7/4.
//

#include <vector>
#include <string>

using namespace std;

class Solution {
public:
  vector<int> buildArray(vector<int>& nums) {
    int n = nums.size();
    vector<int> ans(n);
    for (int i = 0; i < n; ++i) ans[i] = nums[nums[i]];
    return ans;
  }
};