function waysToSplit(nums: number[]): number {
  const sum = new Array(nums.length + 1).fill(0);
  const MOD = 1e9 + 7;
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  let ans = 0;
  let lastMid = 1;
  let hasSet = true;
  let lastCount = -1;
  for (let i = 0; i < nums.length - 2; i++) {
    const leftSum = sum[i + 1];
    hasSet = false;
    if (leftSum === sum[i] && lastCount !== -1) {
      ans += lastCount % MOD;
      continue;
    }
    lastCount = -1;
    for (let j = Math.max(lastMid, i + 1); j < nums.length - 1; j++) {
      const midSum = sum[j + 1] - sum[i + 1];
      if (midSum >= leftSum && !hasSet) {
        lastMid = j;
        hasSet = true;
      } else if (midSum < leftSum) continue;
      const rightSum = sum[sum.length - 1] - sum[j + 1];
      if (midSum >= leftSum && rightSum >= midSum) {
        ans = 1 + ans % MOD;
        lastCount = 1 + lastCount % MOD;
      }
      else if (rightSum < midSum) break;
    }
  }
  
  return ans % MOD;
};