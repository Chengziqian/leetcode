//
// Created by ZiqianCheng on 2021/6/18.
//

// HARD https://leetcode-cn.com/problems/median-of-two-sorted-arrays

/*
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

 */


#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int n = nums1.size() + nums2.size();
    return n & 1 ?
    findKthInTwoArray(nums1, nums2,  n / 2 + 1):
    (findKthInTwoArray(nums1, nums2,  n / 2) + findKthInTwoArray(nums1, nums2,  n / 2 + 1)) / 2.0;
  }

  int findKthInTwoArray(vector<int>& nums1, vector<int>& nums2, int k) {
    int n1 = nums1.size(), n2 = nums2.size();
    int index1 = 0, index2 = 0;
    while (index1 < n1 && index2 < n2) {
      if (k == 1) return min(nums1[index1], nums2[index2]);
      int newIndex1 = min(index1 + k / 2 - 1, n1 - 1);
      int newIndex2 = min(index2 + k / 2 - 1, n2 - 1);
      if (nums1[newIndex1] <= nums2[newIndex2]) {
        k -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1;
      } else {
        k -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
    if (index1 >= n1) return nums2[index2 + k - 1];
    else return nums1[index1 + k - 1];
  }
};

int main() {
  Solution s;
  vector<int> t1 = {1, 3, 5};
  vector<int> t2 = {2, 4, 6};
  cout << s.findKthInTwoArray(t1, t2, 1) << endl;
  cout << s.findKthInTwoArray(t1, t2, 2) << endl;
  cout << s.findKthInTwoArray(t1, t2, 3) << endl;
  cout << s.findKthInTwoArray(t1, t2, 4) << endl;
  cout << s.findKthInTwoArray(t1, t2, 5) << endl;
  cout << s.findKthInTwoArray(t1, t2, 6) << endl;

  return 0;
}