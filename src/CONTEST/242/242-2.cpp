//
// Created by 程子骞 on 2021/5/23.
//
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;
class Solution {
public:
  int minSpeedOnTime(vector<int>& dist, double hour) {
    if (dist.size() - 1 >= hour) return -1;
    long long sum = 0;
    for (auto d: dist) sum += d;
    long long left = ceil((double)sum / hour);
    long long right = 1e7;
    while (left <= right) {
      long long mid = left + (right - left) / 2;
      if (check(dist, mid, hour)) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  }
  bool check(vector<int>& dist, long long speed, double hour) {
    double need = 0;
    for (int i = 0; i < dist.size() - 1; i++) {
      need += ceil((double)dist[i] / speed);
    }
    need += (double)dist[dist.size() - 1] / speed;
    return need <= hour;
  }
};