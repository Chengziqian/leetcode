//
// Created by ZiqianCheng on 2021/7/6.
//

// MEDIUM https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray

/*
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

 

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100

 */

#include <vector>
#include <unordered_set>
using namespace std;
class Solution {
private:
  int MOD = 1000000009;
  int BASE = 113;
  using LL = long long;
public:
  int findLength(vector<int>& nums1, vector<int>& nums2) {
    int left = 1, right = min(nums1.size(), nums2.size());
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(nums1, nums2, mid)) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }

  bool check(vector<int>& nums1, vector<int>& nums2, int len) {
    LL hashA = 0;
    for (int i = 0; i < len; ++i) {
      hashA = (hashA * BASE + nums1[i]) % MOD;
    }
    unordered_set<LL> hashSetA;
    hashSetA.insert(hashA);
    LL multi = quickMulti(BASE, len - 1);
    for (int i = len; i < nums1.size(); ++i) {
      hashA = ((hashA - multi * nums1[i - len] % MOD + MOD) % MOD * BASE + nums1[i]) % MOD;
      hashSetA.insert(hashA);
    }
    LL hashB = 0;
    for (int i = 0; i < len; ++i) {
      hashB = (hashB * BASE + nums2[i]) % MOD;
    }
    if (hashSetA.count(hashB)) return true;
    for (int i = len; i < nums2.size(); ++i) {
      hashB = ((hashB - multi * nums2[i - len] % MOD + MOD) % MOD * BASE + nums2[i]) % MOD;
      if (hashSetA.count(hashB)) return true;
    }
    return false;
  }

  LL quickMulti(LL a, LL b) {
    LL cur = a;
    int ans = 1;
    while (b) {
      if (b & 1) ans = ans * cur % MOD;
      cur = cur * cur % MOD;
      b >>= 1;
    }
    return ans;
  }
};