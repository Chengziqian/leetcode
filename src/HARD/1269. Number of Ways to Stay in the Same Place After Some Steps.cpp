// 05/12/2021 HARD

// https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps

/*
You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array or stay in the same place  (The pointer should not be placed outside the array at any time).

Given two integers steps and arrLen, return the number of ways such that your pointer still at index 0 after exactly steps steps.

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: steps = 3, arrLen = 2
Output: 4
Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
Example 2:

Input: steps = 2, arrLen = 4
Output: 2
Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
Example 3:

Input: steps = 4, arrLen = 2
Output: 8
 

Constraints:

1 <= steps <= 500
1 <= arrLen <= 10^6

*/
#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
using namespace std;
class Solution {
  private:
    const long long MOD = 1e9 + 7;
    long long memo[501][501];
  public:
    int numWays(int steps, int arrLen) {
      memset(memo, -1, sizeof(memo));
      long long ans = 0;
      memo[0][0] = 1;
      return dfs(0, steps, arrLen) % MOD;
    }
    long long dfs(int pos, int step, int arrLen) {
      if (pos < 0 || pos > step || pos >= arrLen) return 0;
      if (memo[pos][step] != -1) return memo[pos][step];
      memo[pos][step] = (dfs(pos, step - 1, arrLen) + dfs(pos + 1, step - 1, arrLen) + dfs(pos - 1, step - 1, arrLen)) % MOD;
      return memo[pos][step];
    }
};
int main() {
  Solution s;
  cout << s.numWays(3, 2) << endl;
  cout << s.numWays(2, 4) << endl;
  cout << s.numWays(4, 2) << endl;
  return 0;
}