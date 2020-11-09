// 09/18/2020 MEDIUM

// https://leetcode-cn.com/problems/permutations-ii/

/**
 *
 Given a collection of numbers that might contain duplicates, return all possible unique permutations.

 Example:

 Input: [1,1,2]
 Output:
 [
 [1,1,2],
 [1,2,1],
 [2,1,1]
 ]
 */

function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];
  const temp: number[] = [];
  const used: boolean[] = Array(nums.length).fill(false);
  function dfs(depth: number) {
    if (depth === nums.length) {
      ans.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;
      temp.push(nums[i]);
      used[i] = true;
      dfs(depth + 1);
      temp.pop();
      used[i] = false;
    }
  }
  dfs(0);
  return ans;
};
