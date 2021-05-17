// 05/17/2021 MEDIUM

// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

#include <queue>
#include <vector>
using namespace std;
class Solution {
public:
    int movingCount(int m, int n, int k) {
      vector<vector<bool>> vis(m, vector<bool>(n, false));
      queue<pair<int, int>> q;
      q.push(make_pair(0, 0));
      vis[0][0] = true;
      int direction[4][2] = {{1, 0}, {-1, 0}, {0, -1}, {0, 1}};
      int ans = 0;
      while(!q.empty()) {
        pair<int, int> current = q.front();
        q.pop();
        ans++;
        for (int p = 0; p < 4; p++) {
          int ni = current.first + direction[p][0];
          int nj = current.second + direction[p][1];
          if (ni < 0 || ni >= m || nj < 0 || nj >= n || vis[ni][nj] || getDigitSum(ni) + getDigitSum(nj) > k) continue;
          q.push(make_pair(ni, nj));
          vis[ni][nj] = true;
        }
      }
      return ans;
    }

    int getDigitSum(int n) {
      int ans = 0;
      while (n) {
        ans += n % 10;
        n = n / 10;
      }
      return ans;
    }
};