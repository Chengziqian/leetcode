function getSumAbsoluteDifferences(nums: number[]): number[] {
  const ans: number[] = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    ans[0] += Math.abs(nums[0] - nums[i]);
  }

  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] + (nums[i] - nums[i - 1]) * (2 * i - nums.length)
  }

  return ans;
};