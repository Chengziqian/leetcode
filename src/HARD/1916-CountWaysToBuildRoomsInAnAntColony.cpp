//
// Created by ZiqianCheng on 2021/6/28.
//

// HARD https://leetcode-cn.com/problems/count-ways-to-build-rooms-in-an-ant-colony

/*
 * You are an ant tasked with adding n new rooms numbered 0 to n-1 to your colony.
 * You are given the expansion plan as a 0-indexed integer array of length n, prevRoom,
 * where prevRoom[i] indicates that you must build room prevRoom[i] before building room i,
 * and these two rooms must be connected directly.
 * Room 0 is already built, so prevRoom[0] = -1.
 * The expansion plan is given such that once all the rooms are built, every room will be reachable from room 0.

You can only build one room at a time,
 and you can travel freely between rooms you have already built only if they are connected.
 You can choose to build any room as long as its previous room is already built.

Return the number of different orders you can build all the rooms in.
 Since the answer may be large, return it modulo 109 + 7.

 

Example 1:


Input: prevRoom = [-1,0,1]
Output: 1
Explanation: There is only one way to build the additional rooms: 0 → 1 → 2
Example 2:


Input: prevRoom = [-1,0,0,1,2]
Output: 6
Explanation:
The 6 ways are:
0 → 1 → 3 → 2 → 4
0 → 2 → 4 → 1 → 3
0 → 1 → 2 → 3 → 4
0 → 1 → 2 → 4 → 3
0 → 2 → 1 → 3 → 4
0 → 2 → 1 → 4 → 3
 

Constraints:

n == prevRoom.length
2 <= n <= 105
prevRoom[0] == -1
0 <= prevRoom[i] < n for all 1 <= i < n
Every room is reachable from room 0 once all the rooms are built.

 */

#include <vector>
#include <unordered_map>
using namespace std;
class Solution {
private:
  using LL = long long;
  using P = pair<LL, int>;
  int MOD = 1e9 + 7;
  vector<LL> fac, inv;
public:
  int waysToBuildRooms(vector<int>& prevRoom) {
    int n = prevRoom.size();
    vector<vector<int>> edges(n);
    for (int i = 1; i < n; ++i) {
      edges[prevRoom[i]].push_back(i);
    }
    fac.resize(n);
    inv.resize(n);
    fac[0] = 1, inv[0] = 1;
    for (int i = 1; i < n; ++i) {
      fac[i] = fac[i - 1] * i % MOD;
      inv[i] = quickMulti(fac[i], MOD - 2);
    }
    return dfs(0, edges).first;
  }

  P dfs(int root, vector<vector<int>>& edges) {
    if (edges[root].empty()) return make_pair(1, 1);
    LL ans = 1;
    int count = 0;
    for (auto p: edges[root]) {
      P sub = dfs(p, edges);
      ans = ans * sub.first % MOD * inv[sub.second] % MOD;
      count += sub.second;
    }
    ans = ans * fac[count] % MOD;
    return make_pair(ans, count + 1);
  }

  int quickMulti(int x, int y) {
    int ans = 1;
    LL cur = x;
    while (y) {
      if (y & 1) ans = ans * cur % MOD;
      cur = cur * cur % MOD;
      y >>= 1;
    }
    return ans;
  }
};