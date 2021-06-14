//
// Created by 程子骞 on 2021/6/6.
//

#include <vector>
#include <string>
using namespace std;
// 对包裹和箱子排序，对每一个箱子，贪心地在包裹中二分查找恰好小于箱子尺寸的最后一个包裹，此时浪费的空间最小
// 假如在第 $k$ 个箱子中查找得到第 $i$ 个包裹，第 $k + 1$ 个箱子查找得到第 $j$ 个包裹，那么对答案的贡献为 $boxSize_k * (j - i + 1) - \sum_{n=i}^jpackage_n$;
// 我们可以提前计算前缀和使求和操作耗时为$O(1)$。每次维护查找得到的下标，并注意边界判断。
class Solution {
private:
  using LL = long long;
public:
  int minWastedSpace(vector<int>& packages, vector<vector<int>>& boxes) {
    sort(packages.begin(), packages.end());
    int n = packages.size();
    int m = boxes.size();
    int MOD = 1e9 + 7;
    vector<LL> sum(n + 1, 0);
    for (int i = 0; i < n; ++i) {
      sum[i + 1] = sum[i] + packages[i]; // 前缀和
    }
    LL ans = LLONG_MAX;
    for (int i = 0; i < m; ++i) {
      int index = 0;
      LL wast = 0;
      sort(boxes[i].begin(), boxes[i].end());
      if (boxes[i].back() < packages.back()) continue; // 无法装下最大包裹
      for (int k = 0; k < boxes[i].size(); ++k) {
        int nextIndex = binarySearch(packages, boxes[i][k]); // 下一个恰好小于当前箱子的最后一个包裹下标
        if (nextIndex < index) continue; // 边界处理
        wast += (LL)boxes[i][k] * (nextIndex - index + 1) - (sum[nextIndex + 1] - sum[index]); // 计算浪费的空间
        index = nextIndex + 1; // 更新下标
        if (index >= n) break;
      }
      ans = min(ans, wast);
    }
    return ans == LLONG_MAX ? -1 : ans % MOD;
  }

  int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (arr[mid] <= target) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
};