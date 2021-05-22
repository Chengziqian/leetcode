// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/tree-diameter/

/*
Given an undirected tree, return its diameter: the number of edges in a longest path in that tree.

The tree is given as an array of edges where edges[i] = [u, v] is a bidirectional edge between nodes u and v.  
Each node has labels in the set {0, 1, ..., edges.length}.

 

Example 1:



Input: edges = [[0,1],[0,2]]
Output: 2
Explanation: 
A longest path of the tree is the path 1 - 0 - 2.
Example 2:



Input: edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
Output: 4
Explanation: 
A longest path of the tree is the path 3 - 2 - 1 - 4 - 5.
 

Constraints:

0 <= edges.length < 10^4
edges[i][0] != edges[i][1]
0 <= edges[i][j] <= edges.length
The given edges form an undirected tree.

*/
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
  public:
      int treeDiameter(vector<vector<int>>& edges) {
        int n = edges.size();
        vector<vector<int>> adj(n + 1);
        for (int i = 0; i < n; ++i) {
          adj[edges[i][0]].push_back(edges[i][1]);
          adj[edges[i][1]].push_back(edges[i][0]);
        }
        pair<int, int> ans(0, 0);
        vector<bool> vis(n + 1, false);
        dfs(0, adj, vis, 0, ans);
        ans.second = 0;
        dfs(ans.first, adj, vis, 0, ans);
        return ans.second;
      }

      void dfs(int u, vector<vector<int>>& adj, vector<bool>& vis, int depth, pair<int, int>& ans) {
        vis[u] = true;
        if (ans.second < depth) {
          ans.second = depth;
          ans.first = u;
        }
        for (int i = 0; i < adj[u].size(); ++i) {
          int v = adj[u][i];
          if (!vis[v]) dfs(v, adj, vis, depth + 1, ans);
        }
        vis[u] = false;
      }
  };

  int main() {
    Solution s;
    vector<vector<int>> v1 = {{0,1},{0,2}};
    vector<vector<int>> v2 = {{0,1},{1,2},{2,3},{1,4},{4,5}};
    vector<vector<int>> v3 = {{0,1},{1,2},{2,3},{2,4},{4,5},{5,6},{3,7},{7,8},{8,9},{9,10}};
    cout << s.treeDiameter(v1) << endl;
    cout << s.treeDiameter(v2) << endl;
    cout << s.treeDiameter(v3) << endl;
    return 0;
  }