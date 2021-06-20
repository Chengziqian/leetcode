//
// Created by ZiqianCheng on 2021/6/5.
//

// https://leetcode-cn.com/circle/discuss/MZrlaD/

#include <vector>
using namespace std;
class Solution {
public:
  int maxNumberOfBooks(vector<vector<int>>& books) {
    if (books.empty()) return 0;
    auto cmp = [](const vector<int>& a, const vector<int>& b) {
      return a[0] > b[0]; // 排序，去掉第一维，保证下标小的一定在底部
    };
    sort(books.begin(), books.end(), cmp);
    int n = books.size();
    int ans = 0;
    vector<int> dp(n, 1); // dp[i]代表必须以book[i]为堆顶书的数量
    for (int i = 0; i < n; ++i) {
      for (int k = 0; k < i; ++k) {
        if (books[k][0] > books[i][0] && books[k][1] > books[i][1]) { // 在前面寻找一个可以堆放在其上的书
          dp[i] = max(dp[i], dp[k] + 1);
        }
      }
      ans = max(ans, dp[i]); // 对每个状态跟更新答案
    }
    return ans;
  }
};

class Solution2 {
public:
  int maxNumberOfBooks(vector<vector<int>>& books) {
    if (books.empty()) return 0;
    auto cmp = [](const vector<int>& a, const vector<int>& b) {
      return a[0] == b[0] ? a[1] < b[1] : a[0] > b[0]; // 排序，保证下标小的一定在底部
    };
    sort(books.begin(), books.end(), cmp);
    int n = books.size();
    vector<int> dp(n, 0); // dp[i]代表book数量为i + 1个时书籍的最小值
    int ans = 1;
    dp[0] = books[0][1];
    for (int i = 0; i < n; ++i) {
      if (books[i][1] < dp[ans - 1]) {
        dp[ans++] = books[i][1];
      } else {
        int left = 0, right = ans - 1;
        while (left <= right) {
          int mid = (left + right) / 2;
          if (dp[mid] <= books[i][1]) right = mid - 1;
          else left = mid + 1;
        }
        dp[left] = books[i][1]; // 二分查找最后一个严格大于books[i][1]的长度，books[i][1]可接在其后，更新dp
      }
    }
    return ans;
  }
};