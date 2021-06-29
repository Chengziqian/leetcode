//
// Created by ZiqianCheng on 2021/6/28.
//

// HARD https://leetcode-cn.com/problems/bus-routes/

/*
 * You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

 

Example 1:

Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
Example 2:

Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1
 

Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 105
All the values of routes[i] are unique.
sum(routes[i].length) <= 105
0 <= routes[i][j] < 106
0 <= source, target < 106

 */

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;
class Solution {
public:
  int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {
    if (source == target) return 0;
    int n = routes.size();
    vector<vector<int>> adjList(n, vector<int>());
    unordered_map<int, vector<int>> rc;
    unordered_set<int> sourceNodes, targetNodes;
    for (int i = 0; i < n; ++i) {
      for (auto stop: routes[i]) {
        if (stop == source) sourceNodes.insert(i);
        if (stop == target) targetNodes.insert(i);
        rc[stop].push_back(i);
      }
    }
    for (auto& p: rc) {
      vector<int>& nodes = p.second;
      int size = nodes.size();
      for (int i = 0; i < size; ++i) {
        for (int j = i + 1; j < size; ++j) {
          adjList[nodes[i]].push_back(nodes[j]);
          adjList[nodes[j]].push_back(nodes[i]);
        }
      }
    }
    queue<int> q;
    vector<int> vis(n, false);
    int ans = ;
    for (auto s: sourceNodes) {
      q.push(s);
      vis[s] = true;
    }
    while (!q.empty()) {
      int size = q.size();
      for (int i = 0; i < size; ++i) {
        int u = q.front();
        q.pop();
        if (targetNodes.count(u)) return ans;
        for (auto v: adjList[u]) {
          if (!vis[v]) {
            q.push(v);
            vis[v] = true;
          }
        }
      }
      ans++;
    }
    return -1;
  }
};