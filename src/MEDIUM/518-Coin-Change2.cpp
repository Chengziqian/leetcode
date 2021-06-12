//
// Created by ZiqianCheng on 2021/6/10.
//

// MEDIUM https://leetcode-cn.com/problems/coin-change-2

/*
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
 

Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000

 */

#include <vector>
using namespace std;

// 方法1：暴力DFS
// index代表当前需要添加的硬币下标，amount代表还需要多少兑换多少钱

class Solution {
public:
  int change(int amount, vector<int>& coins) {
    return dfs(0, coins, amount);
  }

  int dfs(int index, vector<int>& coins, int amount) {
    if (amount < 0) return 0; // 配多了，非法状态，没有方案
    if (amount == 0) return 1; // 恰好配成，找到一个方案
    int ans = 0;
    for (int i = index; i < coins.size(); ++i) { // 当前我可以选择[index, len]所有的硬币，
      ans += dfs(i, coins, amount - coins[i]); // 注意可以重复选择当前，所以下一步仍然从i开始
    }
    return ans;
  }
};
// 方案二：记忆化搜索
// 每一个硬币可以不选择或者选择多个，暴力dfs的时间复杂度是指数级别的，不出意外超时了。所以观察下是否可以优化。
// 注意观察dfs的参数，对于每一个确定的index和amount 方案数已经确定了，即从下标为index的硬币到最后一个硬币能凑成amount的方案数，这就是一个子问题。
// 考虑记录每一次dp产生的答案，使用memo数组来保存方案数，这就是记忆化搜索。
class Solution2 {
private:
  int memo[301][5001];
public:
  int change(int amount, vector<int>& coins) {
    memset(memo, -1, sizeof(memo)); // -1 代表还没有计算到
    return dfs(0, coins, amount);
  }

  int dfs(int index, vector<int>& coins, int amount) {
    if (amount < 0) return 0;
    if (amount == 0) return 1;
    if (memo[index][amount] != -1) return memo[index][amount]; // 已经计算过了，直接返回
    int ans = 0;
    for (int i = index; i < coins.size(); ++i) {
      ans += dfs(i, coins, amount - coins[i]);
    }
    memo[index][amount] = ans; // 记忆化
    return ans;
  }
};
// 从记忆化搜索可以发现，对一个大的问题拆分成小问题求解，计算出小问题后回溯计算大问题，这个过程叫做自顶向下动态规划。
// 对于本题来说 拆分过程为 $dp(i, amount) -> dp(i, amount - c_i)$
// 可以发现每一个状态参数的递归方向是一致的，即 amount 是降序的。所以我们也可以使用迭代方式求解。
// 使用dp[i][j] 二维数组迭代求出答案。dp[i][j] 代表 使用前 i 个硬币我能凑成 j 金额的方案数
// 迭代过程为 $dp(i, j) = dp(i - 1, j) + dp(i, j - coins_{i - 1})$ 代表我不选择和选择 $coins_{i - 1}$ 的方案数之和
// 这里是从小问题迭代到大问题，所以是自底向上的动态规划
class Solution3 {
public:
  int change(int amount, vector<int>& coins) {
    int n = coins.size();
    vector<vector<int>> dp(n + 1, vector<int>(amount + 1, 0));
    dp[0][0] = 1;
    for (int i = 1; i <= n; ++i) {
      for (int j = 0; j <= amount; ++j) {
        dp[i][j] = dp[i - 1][j];
        if (j >= coins[i - 1]) {
          dp[i][j] += dp[i][j - coins[i - 1]];
        }
      }
    }
    return dp[n][amount];
  }
};
// 方法四：滚动数组
// 每次 i 是不变的 所以可以优化掉第一维的空间
class Solution4 {
public:
  int change(int amount, vector<int>& coins) {
    int n = coins.size();
    vector<int> dp(amount + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; ++i) {
      for (int j = coins[i - 1]; j <= amount; ++j) {
        dp[j] += dp[j - coins[i - 1]];
      }
    }
    return dp[amount];
  }
};