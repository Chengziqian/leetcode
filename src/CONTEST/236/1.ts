function arraySign(nums: number[]): number {
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) ans *= 1;
    if (nums[i] < 0) ans *= -1;
    if (nums[i] === 0) ans *= 0;
  }
  return ans;
};