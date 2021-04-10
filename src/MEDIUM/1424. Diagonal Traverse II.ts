// 03/22/2021 MEDIUM

// https://leetcode-cn.com/problems/diagonal-traverse-ii/

/*
Given a list of lists of integers,nums,
return all elements of nums in diagonal order as shown in the below images.

Example 1:



Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]
Example 2:



Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
Example 3:

Input: nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
Output: [1,4,2,5,3,8,6,9,7,10,11]
Example 4:

Input: nums = [[1,2,3,4,5,6]]
Output: [1,2,3,4,5,6]
 

Constraints:

1 <= nums.length <= 10^5
1 <= nums[i].length <= 10^5
1 <= nums[i][j] <= 10^9
There at most 10^5 elements in nums.

 */

function findDiagonalOrder(nums: number[][]): number[] {
  const ans: number[] = [];
  const record: Map<number, number[]> = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (record.has(i + j)) {
        record.get(i + j).push(nums[i][j]);
      } else {
        record.set(i + j, [nums[i][j]]);
      }
    }
  }
  record.forEach(value => {
    while (value.length) {
      ans.push(value.pop());
    }
  })
  return ans;
};
