//
// Created by 程子骞 on 2021/5/23.
//

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  bool canReach(string s, int minJump, int maxJump) {
    vector<bool> dp(s.size(), false);
    vector<int> sum(s.size() + 1, 0);
    dp[0] = true;
    sum[1] = 1;
    for (int i = 1; i < s.size(); ++i) {
      int left = max(i - maxJump, 0);
      int right = i - minJump;
      if (s[i] == '0') {
        if (right >= left && sum[right + 1] - sum[left] > 0) dp[i] = true;
      }
      sum[i + 1] = sum[i] + dp[i];
    }
    return dp[s.size() - 1];
  }
};