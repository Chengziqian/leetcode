// 05/11/2021 HARD

// https://leetcode-cn.com/problems/consecutive-numbers-sum/

/*
Given a positive integer n, how many ways can we write it as a sum of consecutive positive integers?

Example 1:

Input: n = 5
Output: 2
Explanation: 5 = 5 = 2 + 3
Example 2:

Input: n = 9
Output: 3
Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4
Example 3:

Input: n = 15
Output: 4
Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
Note: 1 <= n <= 10 ^ 9.

*/
#include <iostream>
using namespace std;
class Solution {
public:
    int consecutiveNumbersSum(int n) {
      int ans = 0;
      for (int i = 1; n > 0; n -= i++) ans += (n % i == 0);
      return ans;
    }
};

int main() {
  Solution s;
  cout << s.consecutiveNumbersSum(855877922) << endl;
  return 0;
}