//
// Created by 程子骞 on 2021/6/13.
//

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> earliestAndLatest(int n, int firstPlayer, int secondPlayer) {
    int N = 1 << n;
    vector<int> dpMax(N, INT_MIN / 2);
    dpMax[N - 1] = 0;
    vector<int> dpMin(N, INT_MAX / 2);
    dpMin[N - 1] = 0;
    for (int i = 0; i < N; ++i) {
      dpMax[i] = max(dpMax[i], dpMax[(N - 1) ^ i] + 1);
      dpMin[i] = min(dpMin[i], dpMin[(N - 1) ^ i] + 1);
    }
    int ansMax = 0, ansMin = 0;
    for (int i = 0; i < N; ++i) {
      int left = 1 << (n - 1);
      int right = 1;
      int leftCount = 0, rightCount = 0;
      while (left <= right) {
        left >>= leftCount;
        right <<= rightCount;
        if ((left & i) && (right && i)) {
          if (leftCount == firstPlayer - 1 && secondPlayer == n - rightCount) {
            ansMax = max(ansMax, dpMax[i]);
            ansMin = max(ansMin, dpMin[i]);
          }
          leftCount++;
          rightCount++;
        } else {
          if (!(left & i)) leftCount++;
          if (!(right & i)) rightCount++;
        }
      }
    }
    return {ansMin, ansMax};
  }
};