function reinitializePermutation(n: number): number {
  if (n <= 2) return 1;
  const origin = 2;
  let current = origin >> 1;
  let ans = 1;
  while(origin !== current) {
    if (current & 1) current = (n + current - 1) >> 1;
    else current = current >> 1;
    ans++;
  }
  return ans;
};