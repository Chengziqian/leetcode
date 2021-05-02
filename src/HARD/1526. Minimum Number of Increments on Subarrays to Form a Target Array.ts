// 04/20/2021 HARD

// https://leetcode-cn.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

/*
Given an array of positive integers target and an array initial of same size with all zeros.

Return the minimum number of operations to form a target array from initial
if you are allowed to do the following operation:

Choose any subarray from initial and increment each value by one.
The answer is guaranteed to fit within the range of a 32-bit signed integer.
 

Example 1:

Input: target = [1,2,3,2,1]
Output: 3
Explanation: We need at least 3 operations to form the target array from the initial array.
[0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
[1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
[1,2,2,2,1] increment 1 at index 2.
[1,2,3,2,1] target array is formed.
Example 2:

Input: target = [3,1,1,2]
Output: 4
Explanation: (initial)[0,0,0,0] -> [1,1,1,1] -> [1,1,1,2] -> [2,1,1,2] -> [3,1,1,2] (target).
Example 3:

Input: target = [3,1,5,4,2]
Output: 7
Explanation: (initial)[0,0,0,0,0] -> [1,1,1,1,1] -> [2,1,1,1,1] -> [3,1,1,1,1] 
                                  -> [3,1,2,2,2] -> [3,1,3,3,2] -> [3,1,4,4,2] -> [3,1,5,4,2] (target).
Example 4:

Input: target = [1,1,1,1]
Output: 1
 

Constraints:

1 <= target.length <= 10^5
1 <= target[i] <= 10^5
 */

// function minNumberOperations(target: number[]): number {
//   const n = target.length;
//   const segTree: number[][] = new Array(4 * n);
//   build(1, 0, n - 1);
//   return dfs(0, n - 1, 0);
//  
//   function dfs(QL: number, QR: number, current: number): number {
//     let ans = 0;
//     if (QL <= QR) {
//       const [min, index] = query(1, 0, n - 1, QL, QR);
//       ans = min - current;
//       ans += dfs(QL, index - 1, min) + dfs(index + 1, QR, min);
//     }
//     return ans;
//   }
//
//   function build(root: number, L: number, R: number) {
//     segTree[root] = new Array(2);
//     if (L === R) {
//       segTree[root][0] = target[L];
//       segTree[root][1] = L;
//       return;
//     }
//     const mid = L + R >> 1;
//     build(root << 1, L, mid);
//     build(root << 1 | 1, mid + 1, R);
//     segTree[root] = segTree[root << 1][0] <= segTree[root << 1 | 1][0] ? [...segTree[root << 1]] : [...segTree[root << 1 | 1]];
//   }
//
//   function query(root: number, L: number, R: number, QL: number, QR: number): number[] {
//     if (QL <= L && R <= QR) return segTree[root];
//     const mid = L + R >> 1;
//     let ans = [Number.MAX_SAFE_INTEGER, -1];
//     if (QL <= mid) {
//       const left = query(root << 1, L, mid, QL, QR);
//       if (left[0] < ans[0]) ans = [...left];
//     }
//     if (QR > mid) {
//       const right = query(root << 1 | 1, mid + 1, R, QL, QR);
//       if (right[0] < ans[0]) ans = [...right];
//     }
//     return ans;
//   }
// };

function minNumberOperations(target: number[]): number {
  target.push(0);
  const stack: number[] = [0];
  let ans = 0;
  for (let i = 0; i < target.length; i++) {
    while (stack.length && stack[stack.length - 1] > target[i]) {
      const current = stack.pop();
      ans += current - Math.max(stack[stack.length - 1], target[i]);
    }
    stack.push(target[i]);
  }
  return ans;
};
