function countPairs(nums: number[], low: number, high: number): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const res = nums[i] ^ nums[j];
      if (res >= low && res <= high) ans++;
    }
  }
  return ans;
};