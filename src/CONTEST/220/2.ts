function maximumUniqueSubarray(nums: number[]): number {
  const sum: number[] = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  const inQueue: Map<number, number> = new Map();
  let ans: number = 0;
  let i = 0, j = 0;
  while(i < nums.length) {
    // 存在相同元素
    if (inQueue.has(nums[i])) {
      // 当前区间为本次搜索的最长连续互异区间，更新结果
      ans = Math.max(ans, sum[i]- sum[j]);
      const index = inQueue.get(nums[i]);
      // 移动j并且更新记录
      while(j < index + 1) {
        inQueue.delete(nums[j]);
        j++;
      }
    }
    // 移动i
    inQueue.set(nums[i], i);
    i++;
  }
  // 考虑i移动到末尾的情况，更新结果
  ans = Math.max(ans, sum[i] - sum[j]);
  return ans;
};