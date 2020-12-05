function maximumWealth(accounts: number[][]): number {
  if (!accounts.length) return 0;
  let ans = 0;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((pre, cur) => pre + cur, 0);
    ans = Math.max(ans, sum);
  }
  return ans;
};