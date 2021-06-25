//
// Created by ZiqianCheng on 2021/6/25.
//

// MEDIUM https://leetcode-cn.com/problems/network-delay-time/

/*
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

 */

#include <vector>
#include <queue>
#define INF 0x3f3f3f3f
using namespace std;
class Solution {
private:
  using P = pair<int, int>;
public:
  int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    int adjList[101][101];
    memset(adjList, INF, sizeof adjList);
    for (auto &point: times) {
      adjList[point[0]][point[1]] = point[2];
    }
    vector<int> dis(n + 1, INF);
    auto cmp = [](const P &a, const P &b) {
      return a.second > b.second;
    };
    priority_queue<P, vector<P>, decltype(cmp)> pq(cmp);
    vector<bool> vis(n + 1, false);
    pq.push(make_pair(k, 0));
    dis[k] = 0;
    while (!pq.empty()) {
      P cur = pq.top();
      pq.pop();
      int u = cur.first;
      int w = cur.second;
      if (vis[u]) continue;
      vis[u] = true;
      for (int v = 1; v <= n; ++v) {
        if (adjList[u][v] != INF) {
          if (dis[v] > adjList[u][v] + w) {
            dis[v] = adjList[u][v] + w;
            pq.push(make_pair(v, dis[v]));
          }
        }
      }
    }
    int ans = -1;
    for (int u = 1; u <= n ; ++u) {
      if (u != k) ans = max(ans, dis[u]);
    }
    return ans == INF ? -1 : ans;
  }
};