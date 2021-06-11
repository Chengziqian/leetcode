//
// Created by ZiqianCheng on 2021/6/9.
//


#include <vector>
#include <algorithm>
#include <iostream>
#include <limits.h>
using namespace std;
class Solution {
private:
  int ans = INT_MAX;
public:
  int minCost(vector<int>& t, int a) {
    int maxValue = -1;
    if (a >= t.size()) {
      for (auto n: t)
        maxValue = max(maxValue, n);
      return (maxValue + 1) / 2;
    }
    dfs(0, 0, t, a, 0);
    return ans;
  }

  void dfs(int day, int index, vector<int>& t, int a, int preValue) {
    if (index >= t.size()) {
      ans = min(ans, preValue);
      return;
    }
    if (day == a - 1) {
      int sum = 0, maxValue = -1;
      for (int i = index; i < t.size(); ++i) {
        sum += t[i];
        maxValue = max(maxValue, t[i]);
      }
      ans = min(ans, max(preValue, sum - (maxValue / 2)));
      return;
    }
    int sum = 0, maxValue = -1;
    for (int i = index; i < t.size(); ++i) {
      sum += t[i];
      maxValue = max(maxValue, t[i]);
      dfs(day + 1, i + 1, t, a, max(preValue, sum - (maxValue / 2)));
    }
  }
};

int main() {
  Solution s;
  vector<int> t = {1,2,4,3,5};
  int a = 2;
  cout << s.minCost(t, a) << endl;
  return 0;
}
