// 02/08/2021 MEDIUM LABEL: slide window

// https://leetcode-cn.com/problems/longest-turbulent-subarray/

/*
Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.
 

Example 1:

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
Example 2:

Input: arr = [4,8,12,16]
Output: 2
Example 3:

Input: arr = [100]
Output: 1
 

Constraints:

1 <= arr.length <= 4 * 104
0 <= arr[i] <= 109
 */

function maxTurbulenceSize(arr: number[]): number {
  if (arr.length < 2) return arr.length;
  let start = 0;
  while (start + 1 < arr.length && arr[start] === arr[start + 1]) start++;
  if (start + 1 === arr.length) return 1;
  let left = start, right = start + 1;
  let flag = arr[left] < arr[right];
  let ans = 2;
  while (right + 1 < arr.length) {
    if (flag && arr[right] > arr[right + 1]) {
      right++;
      flag = !flag;
    }
    else if (!flag && arr[right] < arr[right + 1]) {
      right++;
      flag = !flag;
    }
    else {
      left = right;
      right = right + 1;
      flag = arr[left] < arr[right];
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
