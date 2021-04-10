// 03/31/2021 MEDIUM

// https://leetcode-cn.com/problems/subsets-ii/

/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
 */

function subsetsWithDup(nums: number[]): number[][] {
  const n = nums.length;
  const set = (1 << n) - 1;
  const ans: number[][] = [];
  ans.push([]);
  const record: Set<string> = new Set<string>();
  for (let sub = 1; sub <= set; sub++) {
    const current: number[] = [];
    for (let i = 0; i < n; i++) {
      if (sub & (1 << i)) current.push(nums[i]);
    }
    current.sort((a, b) => a - b);
    const key = JSON.stringify(current)
    if (!record.has(key)) {
      ans.push(current);
      record.add(key)
    }
  }
  return ans;
};
