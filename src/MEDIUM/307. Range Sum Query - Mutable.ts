// 04/16/2021 MEDIUM

// https://leetcode-cn.com/problems/range-sum-query-mutable/

/*
Given an array nums and two types of queries where you should update the value of an index in the array, and retrieve the sum of a range in the array.

Implement the NumArray class:

NumArray(int[] nums) initializes the object with the integer array nums.
void update(int index, int val) updates the value of nums[index] to be val.
int sumRange(int left, int right) returns the sum of the subarray nums[left, right] (i.e., nums[left] + nums[left + 1], ..., nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 9 = sum([1,3,5])
numArray.update(1, 2);   // nums = [1,2,5]
numArray.sumRange(0, 2); // return 8 = sum([1,2,5])
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
0 <= index < nums.length
-100 <= val <= 100
0 <= left <= right < nums.length
At most 3 * 104 calls will be made to update and sumRange.

 */

import { SegmentTree } from '../../utils/SegmentTree';

class NumArray {
  private segTree: SegmentTree<number>
  constructor(nums: number[]) {
    this.segTree = new SegmentTree<number>(
      nums.length, 
      0, 
      (a, b) => a + b,
      (oldVal, newVal, size) => newVal * size
      )
    this.segTree.init(nums)
  }

  update(index: number, val: number): void {
    this.segTree.update(index, index, val);
  }

  sumRange(left: number, right: number): number {
    return this.segTree.query(left, right);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
