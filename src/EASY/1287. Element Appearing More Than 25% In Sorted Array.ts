// 12/02/2020 EASY

// https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/

/*

Given an integer array sorted in non-decreasing order, 
there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
 

Constraints:

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5

 */
// function findSpecialInteger(arr: number[]): number {
//   if (arr.length <= 2) return arr[0];
//   const targetCount = arr.length >> 2;
//   let currentCount = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       currentCount++;
//       if (currentCount + 1 > targetCount) return arr[i];
//     } else {
//       currentCount = 0;
//     }
//   }
//   return 0;
// };

function findSpecialInteger(arr: number[]): number {
  const step = arr.length >> 2;
  for (let i = 0; i < arr.length - step; i++) {
    if (arr[i] === arr[i + step]) return arr[i];
  }
  return -1;
};
