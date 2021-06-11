//
// Created by 程子骞 on 2021/5/29.
//

#include <vector>
using namespace std;
class Solution {
public:
  int minimumXORSum(vector<int>& nums1, vector<int>& nums2) {
    int ans = INT_MAX;
    dfs(0, nums1, nums2, 0, ans);
    return ans;
  }

  void dfs(int index, vector<int>& nums1, vector<int>& nums2, int cur, int& ans) {
    if (index == nums2.size()) {
      ans = min(ans, cur);
      return;
    }
    for (int i = index; i < nums2.size(); ++i) {
      swap(nums2[i], nums2[index]);
      dfs(index + 1, nums1, nums2, cur + nums1[index] ^ nums2[index], ans);
      swap(nums2[i], nums2[index]);
    }
  }
};