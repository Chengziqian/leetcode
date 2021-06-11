//
// Created by ZiqianCheng on 2021/6/11.
//

// MEDIUM https://leetcode-cn.com/problems/perfect-squares/

/*
 * Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 

Constraints:

1 <= n <= 104
 */

#include <vector>
using namespace std;
// 第一种方式，完全背包组合问题，先遍历数字再遍历平方和
// $dp(i, j)$ 代表使用前i个数恰好组成j的长度
// 转移方程 $dp(i, j) = min(dp(i - 1, j), dp(i, j - i * i) + 1)$
// 由于先遍历数字限制了本次只能选择第 $i$ 个数字，所以是一个组合问题
// 可以使用滚动数组优化第一维空间
#define INF 0x3f3f3f3f
class Solution {
public:
  int numSquares(int n) {
    vector<int> dp(n + 1, INF);
    dp[0] = 0;
    for (int i = 1; i * i <= n; ++i) {
      for (int j = i * i; j <= n; ++j) {
        dp[j] = min(dp[j], dp[j - i * i] + 1);
      }
    }
    return dp[n];
  }
};


// 第一种方式，完全背包排列问题，先遍历平方和再遍历数字
// $dp(j)$ 代表当前组成的平方和
// 转移方程 $dp(j) = min(dp(j), dp(j - i * i) + 1)$
// 代表本次决策考虑所有可能情况，即不选择任何一个数($dp(j)$)和选择任意一个数 $i$ ($dp(j - i * i) + 1)$)
// 由于后遍历数字，对每一个平方和考虑了所有数字的情况，所以是一个排列问题
class Solution2 {
public:
  int numSquares(int n) {
    vector<int> dp(n + 1, INF);
    dp[0] = 0;
    for (int j = 1; j <= n; ++j) {
      for (int i = 1; i * i <= j; ++i) {
        dp[j] = min(dp[j], dp[j - i * i] + 1);
      }
    }
    return dp[n];
  }
};