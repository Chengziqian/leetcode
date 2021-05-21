//
// Created by ZiqianCheng on 2021/5/20.
//

// EASY https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

#include <vector>
#include <queue>
using namespace std;
class Solution {
public:
  vector<int> getLeastNumbers(vector<int>& arr, int k) {
    priority_queue<int, vector<int>, less<int> > pq;
    for (auto num: arr) {
      pq.emplace(num);
      if (pq.size() > k) pq.pop();
    }
    vector<int> ans(k);
    for (int i = k - 1; i >= 0; --i) {
      ans[i] = pq.top();
      pq.pop();
    }
    return ans;
  }
};