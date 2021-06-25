//
// Created by ZiqianCheng on 2021/6/24.
//

// HARD https://leetcode-cn.com/problems/max-points-on-a-line/

/*
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

Example 1:


Input: points = [[1,1],[2,2],[3,3]]
Output: 3
Example 2:


Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
 

Constraints:

1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
All the points are unique.
 */

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;

class Solution {
private:
  using LL = long long;
public:
  int maxPoints(vector<vector<int>>& points) {
    unordered_map<string, unordered_set<int>> rc;
    int n = points.size();
    if (n <= 1) return n;
    int ans = 0;
    for (int i = 0; i < n; ++i) {
      for (int j = i + 1; j < n; ++j) {
        LL x1 = points[i][0], y1 = points[i][1];
        LL x2 = points[j][0], y2 = points[j][1];
        LL A = y2 - y1;
        LL B = x1 - x2;
        LL C = y1 * x2 - x1 * y2;
        LL g = gcd(A, gcd(B, C));
        A /= g; B /= g; C /= g;
        string key = to_string(A) + "," + to_string(B) + "," + to_string(C);
        rc[key].insert(i);
        rc[key].insert(j);
        ans = max(ans, (int)rc[key].size());
      }
    }
    return ans;
  }

  template<typename T>
  T gcd(T a, T b) {
    return a == 0 ? b : gcd(b % a, a);
  }
};