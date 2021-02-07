function maxAbsoluteSum(nums: number[]): number {
  const sum: number[] = new Array(nums.length + 1).fill(0);
  let max = 0;
  let min = 0;
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
    // 任意区间和绝对值最大值 等价于 求前缀和任意两点差的最大值 即 最大值 与 最小值 的差
    max = Math.max(max, sum[i + 1]);
    min = Math.min(min, sum[i + 1]);
  }
  return max - min;
};
