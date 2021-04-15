// 04/15/2021 MEDIUM

// https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/

/*
This question is the same as "Max Chunks to Make Sorted" except the integers of the given array are not necessarily distinct, 
the input array could be up to length 2000, and the elements could be up to 10**8.

Given an array arr of integers (not necessarily distinct),
we split the array into some number of "chunks" (partitions), 
and individually sort each chunk.
After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.
Example 2:

Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.
Note:

arr will have length in range [1, 2000].
arr[i] will be an integer in range [0, 10**8].

 */

// function maxChunksToSorted(arr: number[]): number {
//   let ans = 0;
//   const format: number[] = [...arr].sort((a, b) => a - b);
//   let index = 0;
//   while (index < format.length) {
//     const record: Map<number, number> = new Map<number, number>()
//     do {
//       if (record.has(format[index])) record.set(format[index], record.get(format[index]) + 1);
//       else record.set(format[index], 1);
//       if (record.get(format[index]) === 0) record.delete(format[index]);
//       if (record.has(arr[index])) record.set(arr[index], record.get(arr[index]) - 1);
//       else record.set(arr[index], -1);
//       if (record.get(arr[index]) === 0) record.delete(arr[index]);
//       index++;
//     } while (record.size);
//     ans++;
//   }
//   return ans;
// };

function maxChunksToSorted(arr: number[]): number {
  const stack: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length && stack[stack.length - 1] > arr[i]) {
      const max = stack.pop();
      while (stack.length && stack[stack.length - 1] > arr[i]) stack.pop();
      stack.push(max);
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.length;
};
