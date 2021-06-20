//
// Created by 程子骞 on 2021/6/12.
//

// HARD https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target/

/*
 * Given an array of integers cost and an integer target. Return the maximum integer you can paint under the following rules:

The cost of painting a digit (i+1) is given by cost[i] (0 indexed).
The total cost used must be equal to target.
Integer does not have digits 0.
Since the answer may be too large, return it as string.

If there is no way to paint any integer given the condition, return "0".

 

Example 1:

Input: cost = [4,3,2,5,6,7,2,5,5], target = 9
Output: "7772"
Explanation:  The cost to paint the digit '7' is 2, and the digit '2' is 3. Then cost("7772") = 2*3+ 3*1 = 9. You could also paint "977", but "7772" is the largest number.
Digit    cost
  1  ->   4
  2  ->   3
  3  ->   2
  4  ->   5
  5  ->   6
  6  ->   7
  7  ->   2
  8  ->   5
  9  ->   5
Example 2:

Input: cost = [7,6,5,5,5,6,8,7,8], target = 12
Output: "85"
Explanation: The cost to paint the digit '8' is 7, and the digit '5' is 5. Then cost("85") = 7 + 5 = 12.
Example 3:

Input: cost = [2,4,6,2,4,6,4,4,4], target = 5
Output: "0"
Explanation: It's not possible to paint any integer with total cost equal to target.
Example 4:

Input: cost = [6,10,15,40,40,40,40,40,40], target = 47
Output: "32211"
 

Constraints:

cost.length == 9
1 <= cost[i] <= 5000
1 <= target <= 5000
 */

#include <vector>
#include <string>
#define NaN "NaN"
using namespace std;
class Solution {
public:
  string largestNumber(vector<int>& cost, int target) {
    vector<string> dp(target + 1, NaN);
    dp[0] = "";
    for (int i = 1; i <= target; ++i) {
      for (int k = 0; k < cost.size(); ++k) {
        if (i - cost[k] >= 0) {
          if (dp[i - cost[k]] != NaN) {
            dp[i] = maxStr(dp[i], dp[i - cost[k]] + to_string(k + 1));
          }
        }
      }
    }
    return dp[target] == NaN ? "0" : dp[target];
  }

  string maxStr(string& a, string&& b) {
    if (a == NaN) return b;
    if (b == NaN) return a;
    if (a.size() > b.size()) return a;
    else if (a.size() < b.size()) return b;
    else return a > b ? a : b;
  }
};