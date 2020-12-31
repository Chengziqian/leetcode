function maxResult(nums: number[], k: number): number {
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  const queue: number[] = [0];
  for (let i = 1; i < nums.length; i++) {
    while(queue.length && queue[0] < Math.max(i - k, 0)) queue.shift();
    dp[i] = dp[queue[0]] + nums[i];
    while(queue.length && dp[queue[queue.length - 1]] < dp[i]) queue.pop();
    queue.push(i);
  }
  return dp[nums.length - 1];
};