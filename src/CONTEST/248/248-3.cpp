//
// Created by 程子骞 on 2021/7/4.
//

// 简单的组合数学 0-9有5个偶数和4个质数，不排除前导0的方案数为 $5_evenCount * 4_oddCount$ 由于n很大不可能线性计算，使用快速幂。

#include <vector>
#include <string>

using namespace std;

class Solution {
private:
  using LL = long long;
  int MOD = 1e9 + 7;
public:
  int countGoodNumbers(LL n) {
    LL odd = n / 2;
    LL even = n - odd;
    return ((LL)quickMuti(4, odd) * quickMuti(5, even)) % MOD;
  }

  int quickMulti(LL a, LL b) {
    LL ret = a, ans = 1;
    while (b) {
      if (b & 1) ans = ans * ret % MOD;
      ret = ret * ret % MOD;
      b >>= 1;
    }
    return ans;
  }
};