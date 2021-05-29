//
// Created by 程子骞 on 2021/5/22.
//

// MEDIUM https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  int singleNumber(vector<int>& nums) {
    int ans = 0;
    for (int i = 0; i < 31; i++) {
      int count = 0;
      for (auto n: nums) {
        if (n & (1 << i)) count++;
      }
      if (count % 3) ans |= (1 << i);
    }
    return ans;
  }
};