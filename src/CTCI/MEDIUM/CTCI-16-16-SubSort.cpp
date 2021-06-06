//
// Created by ZiqianCheng on 2021/6/3.
//

// MEDIUM https://leetcode-cn.com/problems/sub-sort-lcci/

/*
 * Given an array of integers, write a method to find indices m and n such that if you sorted elements m through n,
 * the entire array would be sorted. Minimize n - m (that is, find the smallest such sequence).

Return [m,n]. If there are no such m and n (e.g. the array is already sorted), return [-1, -1].

Example:

Input:  [1,2,4,7,10,11,7,12,6,7,16,18,19]
Output:  [3,9]
Note:

0 <= len(array) <= 1000000

 */

#include <vector>
#include <stack>
using namespace std;
class Solution {
public:
  vector<int> subSort(vector<int>& array) {
    int n = array.size();
    int left = n, right = 0;
    stack<int> s;
    for (int i = 0; i < n; ++i) {
      if (!s.empty() && array[s.top()] > array[i]) {
        right = max(right, i);
        int maxIndex = s.top();
        while (!s.empty() && array[s.top()] > array[i]) {
          left = min(left, s.top());
          s.pop();
        }
        s.push(maxIndex);
      } else {
        s.push(i);
      }
    }
    return { left == n ? -1 : left, right == 0 ? -1 : right };
  }
};