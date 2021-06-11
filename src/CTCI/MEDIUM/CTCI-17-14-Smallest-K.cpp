//
// Created by ZiqianCheng on 2021/6/9.
//

// MEDIUM  https://leetcode-cn.com/problems/smallest-k-lcci

/*
 * Design an algorithm to find the smallest K numbers in an array.

Example:

Input:  arr = [1,3,5,7,2,4,6,8], k = 4
Output:  [1,2,3,4]
Note:

0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))
 */

#include <queue>
#include <vector>
using namespace std;
class Solution {
public:
  vector<int> smallestK(vector<int>& arr, int k) {
    priority_queue<int, vector<int>, less<int>> pq;
    for (auto n: arr) {
      pq.push(n);
      if (pq.size() > k) pq.pop();
    }
    vector<int> ans;
    while (!pq.empty()) {
      ans.push_back(pq.top());
      pq.pop();
    }
    return ans;
  }
  vector<int> smallestK2(vector<int>& arr, int k) {
    quickFind(arr, 0, arr.size() - 1, k);
    vector<int> ans(arr.begin(), arr.begin() + k);
    return ans;
  }

  void quickFind(vector<int>& arr, int left, int right, int k) {
    if (left >= right) return;
    int p = arr[left];
    int l = left, r = right;
    while (l < r) {
      while (l < r && arr[r] >= p) r--;
      swap(arr[l], arr[r]);
      while (l < r && arr[l] < p) l++;
      swap(arr[l], arr[r]);
    }
    if (l == left + k - 1) return;
    else if (l < left + k - 1) quickFind(arr, l + 1, right, k - l + left - 1);
    else quickFind(arr, left, l - 1, k);
  }
};