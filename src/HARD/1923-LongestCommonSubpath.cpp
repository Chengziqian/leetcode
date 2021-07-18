//
// Created by ZiqianCheng on 2021/7/6.
//

// HARD https://leetcode-cn.com/problems/longest-common-subpath

/*
 * There is a country of n cities numbered from 0 to n - 1. In this country, there is a road connecting every pair of cities.

There are m friends numbered from 0 to m - 1 who are traveling through the country. Each one of them will take a path consisting of some cities. Each path is represented by an integer array that contains the visited cities in order. The path may contain a city more than once, but the same city will not be listed consecutively.

Given an integer n and a 2D integer array paths where paths[i] is an integer array representing the path of the ith friend, return the length of the longest common subpath that is shared by every friend's path, or 0 if there is no common subpath at all.

A subpath of a path is a contiguous sequence of cities within that path.

 

Example 1:

Input: n = 5, paths = [[0,1,2,3,4],
                       [2,3,4],
                       [4,0,1,2,3]]
Output: 2
Explanation: The longest common subpath is [2,3].
Example 2:

Input: n = 3, paths = [[0],[1],[2]]
Output: 0
Explanation: There is no common subpath shared by the three paths.
Example 3:

Input: n = 5, paths = [[0,1,2,3,4],
                       [4,3,2,1,0]]
Output: 1
Explanation: The possible longest common subpaths are [0], [1], [2], [3], and [4]. All have a length of 1.
 

Constraints:

1 <= n <= 105
m == paths.length
2 <= m <= 105
sum(paths[i].length) <= 105
0 <= paths[i][j] < n
The same city is not listed multiple times consecutively in paths[i].
 */

#include <vector>
#include <unordered_set>
#include <random>
#include <cstddef>
#include <iostream>
using namespace std;
class Solution {
private:
  using LL = long long;
  static constexpr int MOD1 = 1e9 + 7;
  static constexpr int MOD2 = 1e9 + 9;
  struct pairhash {
    size_t operator() (const pair<LL, LL>& p) const {
      auto fn = hash<LL>();
      return (fn(p.first) << 16) ^ (fn(p.second));
    }
  };
public:
  int longestCommonSubpath(int n, vector<vector<int>>& paths) {
    mt19937 gen{random_device{}()};
    auto dis = uniform_int_distribution<int>(1e6, 1e7);
    int base1 = dis(gen);
    int base2 = dis(gen);
    int m = paths.size();
    auto check = [&](int len) {
      LL multi1 = 1, multi2 = 1;
      for (int i = 0; i < len; ++i) {
        multi1 = multi1 * base1 % MOD1;
        multi2 = multi2 * base2 % MOD2;
      }
      unordered_set<pair<LL, LL>, pairhash> s;
      for (int i = 0; i < m; ++i) {
        unordered_set<pair<LL, LL>, pairhash> t;
        LL hash1 = 0, hash2 = 0;
        for (int j = 0; j < len; ++j) {
          hash1 = (hash1 * base1 + paths[i][j]) % MOD1;
          hash2 = (hash2 * base2 + paths[i][j]) % MOD2;
        }
        if (i == 0 || s.count({hash1, hash2})) {
          t.emplace(hash1, hash2);
        }
        for (int j = len; j < paths[i].size(); ++j) {
          hash1 = ((hash1 * base1 - multi1 * paths[i][j - len] % MOD1 + MOD1) % MOD1 + paths[i][j]) % MOD1;
          hash2 = ((hash2 * base2 - multi2 * paths[i][j - len] % MOD2 + MOD2) % MOD2 + paths[i][j]) % MOD2;
          if (i == 0 || s.count({hash1, hash2})) {
            t.emplace(hash1, hash2);
          }
        }
        if (t.empty()) return false;
        s = move(t);
      }
      return true;
    };
    int left = 1, right = min_element(paths.begin(), paths.end(), [](const vector<int>& a, const vector<int>& b) {
      return a.size() < b.size();
    })->size();
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid)) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
};