//
// Created by ZiqianCheng on 2021/5/25.
//

// HARD https://leetcode-cn.com/problems/make-the-xor-of-all-segments-equal-to-zero/

/*
 * You are given an array nums and an integer k.
 * The XOR of a segment [left, right] where left <= right is the XOR of all the elements with indices between left and right,
 * inclusive: nums[left] XOR nums[left+1] XOR ... XOR nums[right].

Return the minimum number of elements to change in the array such that the XOR of all segments of size k is equal to zero.


Example 1:

Input: nums = [1,2,0,3,0], k = 1
Output: 3
Explanation: Modify the array from [1,2,0,3,0] to from [0,0,0,0,0].
Example 2:

Input: nums = [3,4,5,2,1,7,3,4,7], k = 3
Output: 3
Explanation: Modify the array from [3,4,5,2,1,7,3,4,7] to [3,4,7,3,4,7,3,4,7].
Example 3:

Input: nums = [1,2,4,1,2,5,1,2,6], k = 3
Output: 3
Explanation: Modify the array from [1,2,4,1,2,5,1,2,6] to [1,2,3,1,2,3,1,2,3].
 

Constraints:

1 <= k <= nums.length <= 2000
0 <= nums[i] < 210
 */


#include <unordered_map>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
class Solution {
public:
  int minChanges(vector<int>& nums, int k) {
    int n = nums.size();
    int MAX = 1 << 10;
    int INF = INT_MAX / 2;
    vector<vector<int>> dp(k, vector<int>(MAX, INF));
    vector<int> g(k, INF);
    for (int i = 0; i < k; ++i) {
      unordered_map<int, int> count;
      int size = 0;
      for (int j = i; j < n; j += k) {
        count[nums[j]]++;
        size++;
      }
      if (i == 0) {
        for (int j = 0; j < MAX; ++j) {
          dp[i][j] = size - count[j];
          g[i] = min(g[i], dp[i][j]);
        }
      } else {
        for (int j = 0; j < MAX; ++j) {
          dp[i][j] = g[i - 1] + size;
          for (auto p: count) {
            dp[i][j] = min(dp[i][j], dp[i - 1][j ^ p.first] + size - p.second);
          }
          g[i] = min(g[i], dp[i][j]);
        }
      }
    }
    return dp[k - 1][0];
  }
};

int main() {
  Solution s;
  vector<int> t{1,2,4,1,2,5,1,2,6};
  cout << s.minChanges(t, 3) << endl;
  return 0;
}