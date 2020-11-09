// 09/18/2020 MEDIUM

// https://leetcode-cn.com/problems/permutations/

/**
 * Given a collection of distinct integers, return all possible permutations.

 Example:

 Input: [1,2,3]
 Output:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
 */
function permute(nums: number[]): number[][] {
  const ans: number[][] = [];
  const used: boolean[] = Array(nums.length).fill(false);
  const temp: number[] = [];
  
  function dfs(depth: number) {
    if (depth === nums.length) {
      ans.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
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
