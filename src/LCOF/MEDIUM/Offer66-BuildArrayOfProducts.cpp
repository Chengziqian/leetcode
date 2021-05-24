//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> constructArr(vector<int>& a) {
    int n = a.size();
    vector<int> ans(n);
    if (!n) return ans;
    ans[0] = 1;
    for (int i = 1; i < n; ++i) {
      ans[i] = ans[i - 1] * a[i - 1];
    }
    int tmp = 1;
    for (int i = n - 2; i >= 0; --i) {
      tmp *= a[i + 1];
      ans[i] *= tmp;
    }
    return ans;
  }
};