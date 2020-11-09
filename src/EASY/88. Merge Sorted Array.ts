// 09/11/2020

// https://leetcode-cn.com/problems/merge-sorted-array/


/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let len1 = m - 1;
  let len2 = n - 1;
  let p = nums1.length - 1;
  while (len1 >= 0 && len2 >= 0) {
    if (nums2[len2] > nums1[len1]) {
      nums1[p--] = nums2[len2--];
    } else {
      nums1[p--] = nums1[len1--];
    }
  }
  if (len1 < 0) {
    while (len2 >= 0) {
      nums1[p--] = nums2[len2--];
    }
    return;
  }
  if (len2 < 0) {
    while (len1 >= 0) {
      nums1[p--] = nums1[len1--];
    }
    return;
  }
};
