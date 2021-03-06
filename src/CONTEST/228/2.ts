function countHomogenous(s: string): number {
  let ans = 0;
  const MOD = 1e9 + 7;
  let left = 0, right = 0;
  while (left < s.length) {
    while (right < s.length && s[left] === s[right]) right++;
    const len = right - left;
    ans += (len * (len + 1) / 2) % MOD;
    left = right;
  }
  return ans % MOD;
};
