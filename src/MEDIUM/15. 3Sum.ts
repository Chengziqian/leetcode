// 10/21/2020 MEDIUM

// https://leetcode-cn.com/problems/3sum/

/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

 */

function threeSum(nums: number[]): number[][] {
  const ans: number[][] = [];
  if (!nums.length || nums.length < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k - 1] === nums[k]) continue;
    let i = k + 1;
    let j = nums.length - 1;
    while (i < j) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[i + 1]) i++;
        while (i < j && nums[j] === nums[j - 1]) j--;
        i++;
        j--;
      } else if (sum < 0) {
        while (i < j && nums[i] === nums[i + 1]) i++;
        i++;
      } else {
        while (i < j && nums[j] === nums[j - 1]) j--;
        j--;
      }
    }
  }
  return ans;
};
