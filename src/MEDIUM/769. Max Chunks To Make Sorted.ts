// 04/15/2021 MEDIUM

// https://leetcode-cn.com/problems/max-chunks-to-make-sorted/

/*
Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
Note:

arr will have length in range [1, 10].
arr[i] will be a permutation of [0, 1, ..., arr.length - 1].

 */

// function maxChunksToSorted(arr: number[]): number {
//   let ans = 0;
//   const format: number[] = new Array(arr.length);
//   for (let i = 0; i < format.length; i++) format[i] = i;
//   let index = 0;
//   while (index < format.length) {
//     const record: Set<number> = new Set<number>()
//     do {
//       if (record.has(format[index])) record.delete(format[index]);
//       else record.add(format[index]);
//       if (record.has(arr[index])) record.delete(arr[index]);
//       else record.add(arr[index]);
//       index++;
//     } while (record.size);
//     ans++;
//   }
//   return ans;
// };

function maxChunksToSorted(arr: number[]): number {
  let ans = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) ans++;
  }
  return ans;
};
