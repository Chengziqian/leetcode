// 09/11/2020 MEDIUM

// https://leetcode-cn.com/problems/combination-sum-iii/

function combinationSum3(k: number, n: number): number[][] {
  const pick = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
  const res: number[][] = [];
  
  function dfs(start: number, temp: number[], sum: number) {
    if (sum === n && temp.length === k) {
      res.push([...temp]);
      return;
    }
    if (sum > n || temp.length >= k) return;
    for (let i = start; i < pick.length; i++) {
      temp.push(pick[i]);
      dfs(i + 1, temp, sum + pick[i]);
      temp.pop();
    }
  }
  
  dfs(0, [], 0);
  return res;
};
