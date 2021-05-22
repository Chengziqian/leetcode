// 05/12/2021 MEDIUM

// https://leetcode-cn.com/problems/longest-arithmetic-subsequence/

/*
Given an array A of integers, return the length of the longest arithmetic subsequence in A.

Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

 

Example 1:

Input: A = [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
Example 2:

Input: A = [9,4,7,2,10]
Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].
Example 3:

Input: A = [20,1,15,3,10,5,8]
Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].
 

Constraints:

2 <= A.length <= 1000
0 <= A[i] <= 500

*/
#include <vector>
#include <unordered_map>
#include <iostream>
#include <algorithm>
using namespace std;
class Solution {
public:
    int longestArithSeqLength(vector<int>& A) {
      int n = A.size();
      int ans = 1;
      vector<vector<int>> dp(n, vector<int>(20010, 1));
      for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
          int diff = A[i] - A[j] + 1000;
          dp[i][diff] = max(dp[i][diff], dp[j][diff] + 1);
          ans = max(ans, dp[i][diff]);
        }
      }
      return ans;
    }
};

int main() {
  Solution s;
  vector<int> v = {20,1,15,3,10,5,8};
  cout << s.longestArithSeqLength(v) << endl;
  return 0;
}