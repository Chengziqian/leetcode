//
// Created by 程子骞 on 2021/7/4.
//

// 计算每个怪物的到达时间，贪心地选择最先到达的消灭则消灭的怪物数量是最多的。

#include <vector>
#include <string>

using namespace std;

class Solution {
public:
  int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
    int n = dist.size();
    vector<double> time(n);
    for (int i = 0; i < n; ++i) {
      if (dist[i] == 0) return 0;
      time[i] = (double)dist[i] / speed[i];
    }
    sort(time.begin(), time.end());
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      if (i == 0 && time[i] == 0) ans++; // 第0分钟特殊判断
      else if (time[i] > ans) ans++; // 当前时间怪物没有到达直接消灭
      else return ans;
    }
    return ans;
  }
};