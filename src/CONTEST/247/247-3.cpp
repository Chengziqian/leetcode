//
// Created by 程子骞 on 2021/6/27.
//

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  long long wonderfulSubstrings(string word) {
    int K = 10;
    vector<int> cnt(1 << K, 0);
    cnt[0] = 1;
    vector<int> good{0};
    for (int i = 0; i < K; ++i) {
      good.emplace_back(1 << i);
    }
    int state = 0;
    long long ans = 0;
    for (auto c: word) {
      state ^= (1 << (c - 'a'));
      for (auto g: good) {
        ans += cnt[g ^ state];
      }
      cnt[state]++;
    }
    return ans;
  }
};