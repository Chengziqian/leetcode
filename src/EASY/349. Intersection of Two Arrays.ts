// 09/24/2020 EASY

// https://leetcode-cn.com/problems/intersection-of-two-arrays/
/**
 * 
 * Given two arrays, write a function to compute their intersection.

 Example 1:

 Input: nums1 = [1,2,2,1], nums2 = [2,2]
 Output: [2]
 Example 2:

 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 Output: [9,4]
 Note:

 Each element in the result must be unique.
 The result can be in any order.
  
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const ans: number[] = [];
  const map: { [Key: number]: boolean } = {};
  for (let i = 0; i < len1; i++) {
    map[nums1[i]] = true;
  }
  for (let i = 0; i < len2; i++) {
    if (map[nums2[i]]) ans.push(nums2[i]);
  }
  return [...new Set(ans)];
};
