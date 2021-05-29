//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/route-between-nodes-lcci/

/*
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

Example1:

 Input: n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
 Output: true
Example2:

 Input: n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
 Output true
Note:

0 <= n <= 100000
All node numbers are within the range [0, n].
There might be self cycles and duplicated edges.

 */

#include <vector>
using namespace std;
class Solution {
public:
  bool findWhetherExistsPath(int n, vector<vector<int>>& graph, int start, int target) {
    vector<vector<int>> adj(n);
    vector<bool> vis(n, false);
    for (int i = 0; i < graph.size(); ++i) {
      adj[graph[i][0]].push_back(graph[i][1]);
    }
    return dfs(start, target, adj, vis);
  }

  bool dfs(int u, int v, vector<vector<int>>& adj, vector<bool>& vis) {
    if (u == v) return true;
    vis[u] = true;
    for (int i = 0; i < adj[u].size(); ++i) {
      if (vis[adj[u][i]]) continue;
      if (dfs(adj[u][i], v, adj, vis)) return true;
    }
    vis[u] = false;
    return false;
  }
};