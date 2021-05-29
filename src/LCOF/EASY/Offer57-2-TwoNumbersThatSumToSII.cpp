//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/

#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<int>> findContinuousSequence(int target) {
    vector<vector<int>> ans;
    int diff = 1;
    for (int i = 2; i * i < target * 2; i++) {
      if (((target - diff) % i) == 0) {
        int cur = (target - diff) / i;
        vector<int> list;
        for (int n = 0; n < i; ++n) {
          list.push_back(cur++);
        }
        ans.push_back(list);
      }
      diff += i;
    }
    reverse(ans.begin(), ans.end());
    return ans;
  }
};