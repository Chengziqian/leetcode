//
// Created by ZiqianCheng on 2021/7/13.
//

// EASY https://leetcode-cn.com/problems/count-square-sum-triples/

/*
 * A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

 

Example 1:

Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).
Example 2:

Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
 

Constraints:

1 <= n <= 250
 */

#include <unordered_set>
using namespace std;
class Solution {
public:
  int countTriples(int n) {
    unordered_set<int> rc;
    int ans = 0;
    for (int c = 1; c * c <= n * n; ++c) {
      for (int a = 1; a * a < c * c; ++a) {
        if (rc.count(c * c - a * a)) ans++;
      }
      rc.insert(c * c);
    }
    return ans;
  }
};