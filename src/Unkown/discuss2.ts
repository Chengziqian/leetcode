// https://leetcode-cn.com/circle/discuss/ThF9dG/

function solution(target: number) {
  const memo: boolean[] = new Array(target + 1);
  return dfs(1);
  function dfs(num: number): boolean {
    if (num > target) return false;
    if (num === target) return true;
    if (memo[num] !== undefined) return memo[num];
    return memo[num] = !dfs(num + 1) && !dfs(num * 2)
  }
}