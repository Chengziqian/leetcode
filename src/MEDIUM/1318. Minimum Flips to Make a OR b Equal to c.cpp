// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/

/*
Given 3 positives numbers a, b and c. 
Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.


Example 1:



Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:

1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9

*/
#include <iostream>
using namespace std;
class Solution {
public:
    int minFlips(int a, int b, int c) {
      int ans = 0;
      for (int i = 0; i < 31; i++) {
        int curA = a & (1 << i);
        int curB = b & (1 << i);
        int curC = c & (1 << i);
        if (curC) {
          if (!curA && !curB) ans += 1;
        } else {
          if (curA) ans += 1;
          if (curB) ans += 1;
        }
      }
      return ans;
    }
};

int main() {
  Solution s;
  cout << s.minFlips(2, 6, 5) << endl;
  cout << s.minFlips(4, 2, 7) << endl;
  cout << s.minFlips(1, 2, 3) << endl;
  return 0;
}