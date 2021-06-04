//
// Created by ZiqianCheng on 2021/6/3.
//

// MEDIUM https://leetcode-cn.com/problems/best-line-lcci/

/*
 * Given a two-dimensional graph with points on it, find a line which passes the most number of points.

Assume all the points that passed by the line are stored in list S sorted by their number.
 You need to return [S[0], S[1]], that is , two points that have smallest number.
 If there are more than one line that passes the most number of points, choose the one that has the smallest S[0].
 If there are more that one line that has the same S[0], choose the one that has smallest S[1].

Example:

Input:  [[0,0],[1,1],[1,0],[2,0]]
Output:  [0,2]
Explanation:  The numbers of points passed by the line are [0,2,3].
Note:

2 <= len(Points) <= 300
len(Points[i]) = 2

 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
private:
  using LL = long long;
public:
  vector<int> bestLine(vector<vector<int>>& points) {
    int n = points.size();
    unordered_map<string, int> rc;
    unordered_map<string, pair<int, int>> twoPoints;
    pair<int, int> ans;
    int maxCount = 0;
    for (int i = 0; i < n; ++i) {
      for (int j = i + 1; j < n; ++j) {
        int x1 = points[i][0], y1 = points[i][1];
        int x2 = points[j][0], y2 = points[j][1];
        LL A = y2 - y1, B = x1 - x2, C = (LL)x2 * y1 - (LL)x1 * y2;
        LL gcds = gcd(A, gcd(B, C));
        A /= gcds;
        B /= gcds;
        C /= gcds;
        string key = to_string(A) + "," + to_string(B) + "," + to_string(C);
        if (!rc.count(key)) {
          rc[key] = 2;
          twoPoints[key] = make_pair(i, j);
        } else rc[key]++;
        if (rc[key] > maxCount) {
          maxCount = rc[key];
          ans = twoPoints[key];
        } else if (rc[key] == maxCount) {
          pair<int, int> cur = twoPoints[key];
          if (cur.first < ans.first || (cur.first == ans.first && cur.second < ans.second)) {
            ans = cur;
          }
        }
      }
    }
    return { ans.first, ans.second };
  }

  int gcd(LL x, LL y) {
    return y == 0 ? x : gcd(y, x % y);
  }
};