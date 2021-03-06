// 02/11/2021 EASY

// https://leetcode-cn.com/problems/kth-largest-element-in-a-stream

/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Returns the element representing the kth largest element in the stream.
 

Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
 

Constraints:

1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
At most 104 calls will be made to add.
It is guaranteed that there will be at least k elements in the array when you search for the kth element.

 */
import { PriorityQueue } from '../../utils/PriorityQueue';

class KthLargest {
  private readonly k: number;
  private queue: PriorityQueue<number>
  constructor(k: number, nums: number[]) {
    nums.sort((a, b) => a - b);
    this.k = k;
    this.queue = new PriorityQueue<number>((a, b) => a < b);
    for (let i = nums.length - 1; i >= Math.max(0, nums.length - k); i--) {
      this.queue.add(nums[i]);
    }
  }

  add(val: number): number {
    this.queue.add(val);
    if (this.queue.size() > this.k) this.queue.remove();
    return this.queue.front();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
