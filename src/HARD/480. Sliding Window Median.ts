// 02/02/2021 HARD

// https://leetcode-cn.com/problems/sliding-window-median

/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
Answers within 10^-5 of the actual value will be accepted as correct.

 */
import { Heap } from '../../utils/Heap';

function medianSlidingWindow(nums: number[], k: number): number[] {
  const HeapAsc: Heap<number> = new Heap<number>((a, b) => a < b);
  const HeapDesc: Heap<number> = new Heap<number>((a, b) => a > b);
  let left = 0, right = k - 1;
  const lowerSize = k >> 1;
  for (let i = left; i <= right; i++) {
    HeapDesc.insert(nums[i]);
    if (HeapDesc.size() > lowerSize) {
      const cur = HeapDesc.front();
      HeapDesc.delete(1);
      HeapAsc.insert(cur);
    }
  }
  const ans: number[] = [];
  if (k % 2 === 0) {
    ans.push((HeapAsc.front() + HeapDesc.front()) / 2);
  } else {
    ans.push(HeapAsc.front());
  }
  while (right < nums.length - 1) {
    const deleteVal = nums[left++];
    if (deleteVal < HeapAsc.front()) {
      HeapDesc.delete(HeapDesc.indexOf(v => v === deleteVal));
    } else {
      HeapAsc.delete(HeapAsc.indexOf(v => v === deleteVal));
    }
    const insertVal = nums[++right];
    if (insertVal >= HeapAsc.front()) {
      HeapAsc.insert(insertVal)
    } else {
      HeapDesc.insert(insertVal)
    }
    if (HeapDesc.size() > lowerSize) {
      const cur = HeapDesc.front();
      HeapDesc.delete(1);
      HeapAsc.insert(cur);
    }
    if (HeapAsc.size() > k - lowerSize) {
      const cur = HeapAsc.front();
      HeapAsc.delete(1);
      HeapDesc.insert(cur);
    }
    if (k % 2 === 0) {
      ans.push((HeapAsc.front() + HeapDesc.front()) / 2);
    } else {
      ans.push(HeapAsc.front());
    }
  }
  return ans;
};
