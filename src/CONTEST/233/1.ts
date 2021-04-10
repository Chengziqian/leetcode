function maxAscendingSum(nums: number[]): number {
  const sum: number[] = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while(j + 1 < nums.length && nums[j + 1] > nums[j]) j++;
    ans = Math.max(ans, sum[j + 1] - sum[i]);
  }
  return ans;
};