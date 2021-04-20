// 04/17/2021 MEDIUM

// https://leetcode-cn.com/problems/contains-duplicate-iii/

/*
Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
 

Constraints:

0 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1 
 */
import { BST } from '../../utils/BST';
// function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
//   const bst = new BST<number>((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     const lowerBound = bst.lowerBound(nums[i] - t);
//     if (lowerBound !== undefined && lowerBound <= nums[i] + t) return true;
//     bst.insert(nums[i]);
//     if (i >= k) bst.delete(nums[i - k]);
//   }
//   return false;
// };

namespace ContainsNearbyAlmostDuplicate {
  function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    if (!nums.length) return false;
    const segTree: boolean[] = new Array(nums.length * 3 * 4);
    const valuesSet: Set<number> = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
      valuesSet.add(nums[i]);
      valuesSet.add(nums[i] + t);
      valuesSet.add(nums[i] - t);
    }
    const values = [...valuesSet];
    values.sort((a, b) => a - b);
    build(1, 0, values.length - 1);
    for (let i = 0; i < nums.length; i++) {
      if (i > k) update(1, 0, values.length - 1, find(nums[i - k - 1]), false);
      if (query(1, 0, values.length - 1, find(nums[i] - t), find(nums[i] + t))) return true;
      update(1, 0, values.length - 1, find(nums[i]), true);
    }
    return false;
    
    function build(root: number, L: number, R: number) {
      if (L === R) {
        segTree[root] = false;
        return;
      }
      const mid = L + R >> 1;
      build(root << 1, L, mid);
      build(root << 1 | 1, mid + 1, R);
      segTree[root] = segTree[root << 1] || segTree[root << 1 | 1];
    }
    
    function query(root: number, L: number, R: number, QL: number, QR: number): boolean {
      if (QL <= L && R <= QR) return segTree[root];
      const mid = L + R >> 1;
      let ans = false;
      if (mid >= QL) ans = ans || query(root << 1, L, mid, QL, QR);
      if (mid < QR) ans = ans || query(root << 1 | 1, mid + 1, R, QL, QR);
      return ans;
    }
    
    function update(root: number, L: number, R: number, index: number, value: boolean) {
      if (L === R && index === L) {
        segTree[root] = value;
        return;
      }
      const mid = L + R >> 1;
      if (mid >= index) update(root << 1, L, mid, index, value);
      if (mid < index) update(root << 1 | 1, mid + 1, R, index, value);
      segTree[root] = segTree[root << 1] || segTree[root << 1 | 1];
    }
    
    function find(target: number) {
      let left = 0, right = values.length - 1;
      while (left <= right) {
        const mid = (left + right) >> 1;
        if (values[mid] > target) right = mid - 1;
        else if (values[mid] < target) left = mid + 1;
        else return mid;
      }
    }
  };
}
