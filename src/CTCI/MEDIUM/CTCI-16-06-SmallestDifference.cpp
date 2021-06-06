//
// Created by ZiqianCheng on 2021/6/2.
//

// MEDIUM https://leetcode-cn.com/problems/smallest-difference-lcci/

/*
 * Given two arrays of integers,
 * compute the pair of values (one value in each array) with the smallest (non-negative) difference.
 * Return the difference.

Example:

Input: {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
Output:  3, the pair (11, 8)
Note:

1 <= a.length, b.length <= 100000
-2147483648 <= a[i], b[i] <= 2147483647
The result is in the range [0, 2147483647]

 */
// [1, 2, 3, 11, 15]
// [235, 127, 23, 19, 8]

#include <vector>
using namespace std;
class Solution {
public:
  int smallestDifference(vector<int>& a, vector<int>& b) {
    int m = a.size();
    int n = b.size();
    sort(b.begin(), b.end(), less<int>());
    long long ans = INT_MAX;
    for (int i = 0; i < m; ++i) {
      int left = 0, right = n - 1;
      int target = a[i];
      while (left <= right) {
        int mid = (left + right) / 2;
        if (b[mid] > target) right = mid - 1;
        else if (b[mid] < target) left = mid + 1;
        else return 0;
      }
      if (left < n) ans = min(ans, abs((long long)a[i] - b[left]));
      if (right >= 0) ans = min(ans, abs((long long)a[i] - b[right]));
    }
    return (int)ans;
  }
};