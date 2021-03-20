function minElements(nums: number[], limit: number, goal: number): number {
  const max = limit;
  const min = -limit;
  const sum = nums.reduce((a, b) => a + b, 0);
  let remain = goal - sum;
  if (remain === 0) return 0;
  let ans = 0;
  if (remain < min || remain > max) {
    ans = Math.floor(Math.abs(remain) / limit) + (Math.abs(remain) % limit === 0 ? 0 : 1);
  } else {
    ans = 1;
  }
  return ans;
};