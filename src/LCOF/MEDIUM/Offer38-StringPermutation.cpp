// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

#include <string>
#include <unordered_set>
#include <vector>
using namespace std;
class Solution {
public:
  vector<string> permutation(string s) {
    vector<string> ans;
    vector<bool> vis(s.size(), false);
    sort(s.begin(), s.end());
    dfs("", ans, s, vis);
    return ans;
  }

  void dfs(string cur, vector<string> &ans, string s, vector<bool> &vis) {
    if (cur.size() == s.size()) {
      ans.push_back(cur);
      return;
    }
    for (int i = 0; i < s.size(); ++i) {
      if (vis[i] || (i > 0 && s[i - 1] == s[i] && !vis[i - 1]))
        continue;
      vis[i] = true;
      dfs(cur + s[i], ans, s, vis);
      vis[i] = false;
    }
  }
};