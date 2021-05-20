// 05/17/2021 EASY

// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/

#include <stdint.h>
using namespace std;
class Solution {
public:
    int hammingWeight(uint32_t n) {
      int ans = 0;
      while(n) {
        ans++;
        n &= n - 1;
      }
      return ans;
    }
};