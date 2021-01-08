// 01/08/2021 HARD

// https://leetcode-cn.com/problems/minimum-operations-to-make-a-subsequence/

/*
You are given an array target that consists of distinct integers and another integer array arr that can have duplicates.

In one operation, you can insert any integer at any position in arr. For example, if arr = [1,4,1,2], 
you can add 3 in the middle and make it [1,4,3,1,2]. 
     Note that you can insert the integer at the very beginning or end of the array.

Return the minimum number of operations needed to make target a subsequence of arr.

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.

 

Example 1:

Input: target = [5,1,3], arr = [9,4,2,3,4]
Output: 2
Explanation: You can add 5 and 1 in such a way that makes arr = [5,9,4,1,2,3,4], then target will be a subsequence of arr.
Example 2:

Input: target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]
Output: 3

Constraints:

1 <= target.length, arr.length <= 105
1 <= target[i], arr[i] <= 109
target contains no duplicates.
 */
function minOperations(target: number[], arr: number[]): number {
  const map: Map<number, number> = new Map<number, number>();
  let counter = 0;
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], counter++);
  }
  const tails: number[] = new Array(arr.length + 1).fill(-1);
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) continue;
    const target = map.get(arr[i]);
    let left = 0, right = len - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (tails[mid] >= target) right = mid - 1;
      else left = mid + 1;
    }
    tails[left] = target;
    if (left === len) len++;
  } 
  return target.length - len;
};

