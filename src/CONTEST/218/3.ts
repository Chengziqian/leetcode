function concatenatedBinary(n: number): number {
  const MOD = 1e9 + 7;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const cur = getBit(i);
    ans = (ans * Math.pow(2, cur.length)) % MOD;
    ans = (ans + i) % MOD;
  }

  return ans;

  function getBit(n: number) {
    let str = "";
    while(n) {
      str = n % 2 + str;
      n = Math.floor(n / 2);
    }
    return str;
  }
};