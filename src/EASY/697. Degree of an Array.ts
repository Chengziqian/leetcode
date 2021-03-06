// 02/20/2021 EASY

// https://leetcode-cn.com/problems/degree-of-an-array/

/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

 */

function findShortestSubArray(nums: number[]): number {
  const countRC: Map<number, number[]> = new Map<number, number[]>();
  let degree = 0;
  for (let i = 0; i < nums.length; i++) {
    const count = countRC.has(nums[i]) ? countRC.get(nums[i])[0] + 1 : 1;
    const leftIndex = countRC.has(nums[i]) ? countRC.get(nums[i])[1] : i;
    countRC.set(nums[i], [count, leftIndex, i]);
    degree = Math.max(degree, count);
  }
  let ans = Number.MAX_SAFE_INTEGER;
  countRC.forEach(value => {
    if (value[0] === degree) {
      ans = Math.min(ans, value[2] - value[1] + 1);
    }
  });
  return ans;
};
