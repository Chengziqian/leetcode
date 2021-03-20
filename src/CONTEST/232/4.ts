function maximumScore(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const left = Math.max(k - i + 1, 0);
    const right = Math.min(k + i - 1, n - 1);
    const queue: number[] = [];
    for (let p = left; p < left + i; p++) {
      while(queue.length && nums[queue[queue.length - 1]] > nums[p]) queue.pop();
      queue.push(p);
    }
    ans = Math.max(ans, nums[queue[0]] * i);
    for (let p = left + i; p <= right; p++) {
      while(queue.length && queue[0] <= p - i) queue.shift();
      while(queue.length && nums[queue[queue.length - 1]] > nums[p]) queue.pop();
      queue.push(p);
      ans = Math.max(ans, nums[queue[0]] * i);
    }
  }
  return ans;
};