function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const mask = (1 << n);
  let ans = 0;
  for (let s = 0; s < mask; s++) {
    let current = 0;
    for (let i = 0; i < n; i++) {
      if (s & (1 << i)) current ^= nums[i];
    }
    ans += current;
  }
  return ans;
};