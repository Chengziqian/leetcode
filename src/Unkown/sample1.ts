function solve(nums: number[], target: number) {
  const dp: number[] = new Array(nums.length).fill(-1);
  dp[target] = 0;
  const nextIndex: number[] = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) nextIndex[i] = i;
    if (i > 0 && nums[i - 1] === 0) nextIndex[i] = nextIndex[i - 1];
    else {
      let j = i;
      while (j < nums.length && nums[j] === 0) j++;
      nextIndex[i] = j;
    }
  }
  return search(nums.length - 1);
  
  function search(index: number) {
    if (nextIndex[index] === target) return 0;
    if (dp[index] !== -1) return dp[index];
    dp[index] = Number.MAX_SAFE_INTEGER;
    if (nextIndex[index] - 3 >= 0) {
      dp[index] = Math.min(search(nextIndex[index] - 3) + 1, dp[index]);
    }
    if (nextIndex[index] - 1 >= 0) {
      dp[index] = Math.min(search(nextIndex[index] - 1) + 1, dp[index]);
    }
    if (nextIndex[index] + 1 < nums.length) {
      dp[index] = Math.min(search(nextIndex[index] + 1) + 1, dp[index]);
    }
    return dp[index];
  }
}
