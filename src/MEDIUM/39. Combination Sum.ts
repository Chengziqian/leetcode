// 09/11/2020 MEDIUM

// https://leetcode-cn.com/problems/combination-sum/

// DFS 
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  function dfs(index: number, temp: number[], sum: number) {
    if (sum > target) return
    if (sum === target) {
      res.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      temp.push(candidates[i]);
      dfs(i, temp, sum + candidates[i]);
      temp.pop();
    }
  }
  dfs(0, [], 0);
  return res;
};
