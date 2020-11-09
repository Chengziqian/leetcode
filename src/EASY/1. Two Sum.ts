// 09/08/2020 EASY

// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const map: {[Key: number]: number} = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
  return [];
};