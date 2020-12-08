// 12/07/2020 HARD

// https://leetcode-cn.com/problems/minimum-incompatibility/

/*

You are given an integer array nums and an integer k. You are asked to distribute this array into k subsets of equal size such that there are no two equal elements in the same subset.

A subset's incompatibility is the difference between the maximum and minimum elements in that array.

Return the minimum possible sum of incompatibilities of the k subsets after distributing the array optimally, or return -1 if it is not possible.

A subset is a group integers that appear in the array with no particular order.

 

Example 1:

Input: nums = [1,2,1,4], k = 2
Output: 4
Explanation: The optimal distribution of subsets is [1,2] and [1,4].
The incompatibility is (2-1) + (4-1) = 4.
Note that [1,1] and [2,4] would result in a smaller sum, but the first subset contains 2 equal elements.
Example 2:

Input: nums = [6,3,8,1,3,1,2,2], k = 4
Output: 6
Explanation: The optimal distribution of subsets is [1,2], [2,3], [6,8], and [1,3].
The incompatibility is (2-1) + (3-2) + (8-6) + (3-1) = 6.
Example 3:

Input: nums = [5,3,3,6,3,3], k = 3
Output: -1
Explanation: It is impossible to distribute nums into 3 subsets where no two elements are equal in the same subset.
 

Constraints:

1 <= k <= nums.length <= 16
nums.length is divisible by k
1 <= nums[i] <= nums.length

 */

// function minimumIncompatibility(nums: number[], k: number): number {
//   const n = nums.length;
//   const value: number[] = new Array(1 << n).fill(-1);
//   const count: number[] = new Array(n + 1).fill(0);
//   for (let sub = 0; sub < (1 << n); sub++) {
//     if (countBinaryOne(sub) === n / k) {
//       for (let k = 0; k < n; k++) {
//         if (sub & (1 << k)) count[nums[k]]++;
//       }
//       const isValid = !count.find(c => c > 1);
//       if (isValid) {
//         let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
//         for (let i = 0; i < count.length; i++) {
//           if (count[i] > 0) {
//             max = Math.max(max, i);
//             min = Math.min(min, i);
//           }
//         }
//         value[sub] = max - min;
//       }
//       for (let k = 0; k < n; k++) {
//         if (sub & (1 << k)) count[nums[k]]--;
//       }
//     }
//   }
//  
//   const dp: number[] = new Array(1 << n).fill(-1);
//   dp[0] = 0;
//   for (let mask = 1; mask < (1 << n); mask++) {
//     if (countBinaryOne(mask) % (n / k) === 0) {
//       for (let sub = mask; sub; sub = (sub - 1) & mask) {
//         if (value[sub] !== -1 && dp[sub ^ mask] !== -1) {
//           dp[mask] = dp[mask] === -1 ? value[sub] + dp[sub ^ mask] : Math.min(dp[mask], value[sub] + dp[sub ^ mask])
//         }
//       }
//     }
//   }
//   return dp[(1 << n) - 1];
//  
//  
//   function countBinaryOne(n: number) {
//     let ans = 0;
//     while (n) {
//       ans++;
//       n &= n - 1;
//     }
//     return ans;
//   }
// };

function minimumIncompatibility(nums: number[], k: number): number {
  const lastSelected: number[] = new Array(k).fill(0);
  const setCount: number[] = new Array(k).fill(0);
  const setLength = nums.length / k;
  const count: number[] = new Array(nums.length + 1).fill(0)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
    if (count[nums[i]] > k) return -1;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  dfs(0, 0);
  return ans;
  function dfs(index: number, value: number) {
    if (index >= nums.length) {
      ans = Math.min(ans, value);
      return;
    }
    for (let i = 0; i < k; i++) {
      if (nums[index] === lastSelected[i]) continue;
      if (setCount[i] < setLength) {
        const pre = lastSelected[i];
        lastSelected[i] = nums[index];
        setCount[i]++;
        const diff =  pre > 0 ? nums[index] - pre : 0;
        dfs(index + 1, value + diff);
        lastSelected[i] = pre;
        setCount[i]--;
        if (setCount[i] <= 0) break;
      }
    }
  }
};

