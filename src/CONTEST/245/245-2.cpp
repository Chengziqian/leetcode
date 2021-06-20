//
// Created by 程子骞 on 2021/6/13.
//
// 若 删除前 $k$ 个 $p$ 已经不是 $s$ 的子序列 那么删除前 $k'(k' > k)$ 个 $p$ 也一定不是 $s$ 的子序列，所以可以舍去 $>=k$ 的部分。经典二分查找问题。
#include <string>
#include <vector>
#include <unordered_set>
using namespace std;
class Solution {
public:
  int maximumRemovals(string s, string p, vector<int>& removable) {
    int left = 0, right = removable.size() - 1;
    while (left <= right) {
      unordered_set<int> removeIndex;
      int mid = left + (right - left) / 2;
      for (int i = 0; i <= mid; ++i) removeIndex.insert(removable[i]); // 记录跳过的下标
      if (check(s, p, removeIndex)) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  }

  bool check(string& s, string& p, unordered_set<int>& removeIndex) { // 判断是否为子序列
    int i = 0, j = 0;
    while (i < s.size() && j < p.size()) {
      if (removeIndex.count(i)) {
        i++;
        continue;
      }
      if (s[i] == p[j]) j++;
      i++;
    }
    return j == p.size();
  }
};