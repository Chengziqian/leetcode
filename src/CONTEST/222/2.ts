function countPairs(deliciousness: number[]): number {
  const MOD = 1e9 + 7;
  const sum: number[] = [];
  for (let i = 0; i < 22; i++) {
    sum.push(1 << i);
  }
  let ans = 0;
  const record: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < deliciousness.length; i++) {
    for (let k = 0; k < sum.length; k++) {
      const target = sum[k] - deliciousness[i];
      if (record.has(target)) {
        const cur = record.get(target);
        ans += cur % MOD;
      }
    }
    record.set(deliciousness[i], record.has(deliciousness[i]) ? record.get(deliciousness[i]) + 1 : 1);
  }
  return ans % MOD;
};