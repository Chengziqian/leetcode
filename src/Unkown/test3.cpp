//
// Created by ZiqianCheng on 2021/6/9.
//


#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  /**
   * Note: 类名、方法名、参数名已经指定，请勿修改
   *
   *
   * 计算最小疲劳度总数
   * @param tired int整型vector
   * @param d int整型
   * @return int整型
   */
  int getMinTired(vector<int>& tired, int d) {
    int n = tired.size();
    if (n < d) return -1;
    vector<vector<int>> dp(d + 1, vector<int>(n + 1, 0x3f3f3f3f));
    int curMaxValue = -1;
    for (int j = 1; j <= n; ++j) {
      curMaxValue = max(curMaxValue, tired[j - 1]);
      dp[1][j] = curMaxValue;
    }
    for (int i = 2; i <= d; ++i) {
      for (int j = i; j <= n; ++j) {
        int maxValue = -1;
        for (int k = j - 1; k >= 1; --k) {
          maxValue = max(maxValue, tired[k]);
          dp[i][j] = min(dp[i][j], dp[i - 1][k] + maxValue);
        }
      }
    }
    return dp[d][n];
  }
};

int main() {
  Solution s;
  vector<int> tired = {5,4,3,2,1};
  int day = 2;
  cout << s.getMinTired(tired, day) << endl;
}
