//
// Created by 程子骞 on 2021/7/4.
//

#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
private:
  using P = pair<int, int>;
public:
  int longestCommonSubpath(int n, vector<vector<int>>& paths) {
    vector<vector<P>> adjList(n);
    int size = paths.size();
    for (int k = 0; k < size; ++k) {
      for (int i = 0; i + 1 < paths[k].size(); ++i) {
        adjList[paths[k][i]].emplace_back(make_pair(k, paths[k][i + 1]));
      }
    }
    int ans = 0;
    for (int u = 0; u < n; ++u) {
      int curSize = adjList[u].size();
      cout << u << " " << curSize << endl;
      if (curSize >= size) {

        for (int i = 0; i + 1 < curSize; ++i) {
          if (adjList[u][i].second != adjList[u])
        }
      }
    }
    return ans + 1;
  }
};