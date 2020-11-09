// 09/11/2020 MEDIUM

// https://leetcode-cn.com/problems/combination-sum-ii/

// DFS 
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort();
  const res: number[][] = [];
  function dfs(index: number, temp: number[], sum: number) {
    if (sum > target) return
    if (sum === target) {
      res.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i - 1] === candidates[i] && i - 1 >= index) continue;
      temp.push(candidates[i]);
      dfs(i + 1, temp, sum + candidates[i]);
      temp.pop();
    }
  }
  dfs(0, [], 0);
  return res;
};
