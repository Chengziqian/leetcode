//
// Created by ZiqianCheng on 2021/6/11.
//

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

Constraints:

0 <= k <= 109
0 <= prices.length <= 1000
0 <= prices[i] <= 1000

*/

#include <vector>
#include <iostream>
using namespace std;
#define INF 0x3f3f3f3f
class Solution {
public:
  int maxProfit(int k, vector<int>& prices) {
    vector<int> buy(k + 1, -INF);
    vector<int> sell(k + 1, -INF);
    buy[0] = 0;
    sell[0] = 0;
    for (int i = 0; i < prices.size(); ++i) {
      for (int j = 1; j <= k; ++j) {
        buy[j] = max(buy[j], sell[j - 1] - prices[i]);
        sell[j] = max(sell[j], buy[j] + prices[i]);
      }
    }
    int ans = -INF;
    for (int j = 1; j <= k; ++j) {
      ans = max(ans, sell[k]);
    }
    return ans == -INF ? 0 : ans;
  }
};

int main() {
  Solution s;
  vector<int> t = {3,2,6,5,0,3};
  cout << s.maxProfit(2, t) << endl;
  return 0;
}

