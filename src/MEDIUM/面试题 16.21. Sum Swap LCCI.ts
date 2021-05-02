// 04/30/2021 MEDIUM

// https://leetcode-cn.com/problems/sum-swap-lcci/

/*
Given two arrays of integers, 
find a pair of values (one value from each array) that you can swap to give the two arrays the same sum.

Return an array, where the first element is the element in the first array that will be swapped, 
and the second element is another one in the second array. 
If there are more than one answers, return any one of them. 
If there is no answer, return an empty array.

Example:

Input: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
Output: [1, 3]
Example:

Input: array1 = [1, 2, 3], array2 = [4, 5, 6]
Output: []
Note:

1 <= array1.length, array2.length <= 100000

 */
function findSwapValues(array1: number[], array2: number[]): number[] {
  const rc: Set<number> = new Set<number>();
  const sum1 = array1.reduce((a, b) => a + b, 0);
  const sum2 = array2.reduce((a, b) => a + b, 0);
  for (let i = 0; i < array1.length; i++) rc.add(array1[i]);
  for (let i = 0; i < array2.length; i++) {
    const target = (sum1 - sum2 + 2 * array2[i]) / 2;
    if (rc.has(target)) return [target, array2[i]];
  }
  return [];
};
