// 03/22/2021 HARD

// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

 

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
 

Follow up: The overall run time complexity should be O(log (m+n)).

 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n = nums1.length + nums2.length;
  if (n & 1) {
    return findIndexK((n + 1) >> 1);
  } else {
    return (findIndexK(n >> 1) + findIndexK((n >> 1) + 1)) / 2;
  }
  
  function findIndexK(k: number) {
    let left = 0, right = 0;
    while (k >= 1) {
      if (left >= nums1.length) return nums2[right + k - 1];
      if (right >= nums2.length) return nums1[left + k - 1];
      if (k === 1) return Math.min(nums1[left], nums2[right]);
      const mid = k >> 1;
      const newLeft = Math.min(left + mid, nums1.length) - 1;
      const newRight = Math.min(right + mid, nums2.length) - 1;
      if (nums1[newLeft] < nums2[newRight]) {
        k -= newLeft - left + 1;
        left = newLeft + 1;
      } else {
        k -= newRight - right + 1;
        right = newRight + 1;
      }
    }
  }
};
