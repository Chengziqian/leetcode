function sumOfFlooredPairs(nums: number[]): number {
  nums.sort((a, b) =>  a - b);
  const MOD = 1e9 + 7;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      ans += Math.floor(nums[j] / nums[i]) % MOD;
    }
  }
  return ans % MOD
};