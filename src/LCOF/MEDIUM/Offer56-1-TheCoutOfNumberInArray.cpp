//
// Created by 程子骞 on 2021/5/22.
//

// MEDIUM https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> singleNumbers(vector<int>& nums) {
    int sum = 0;
    for (auto n: nums) sum ^= n;
    int div = 1;
    while ((div & sum) == 0) div <<= 1;
    int a = 0, b = 0;
    for (auto n: nums) {
      if (div & n) a ^= n;
      else b ^= n;
    }
    return {sum ^ a, sum ^ b};
  }
};