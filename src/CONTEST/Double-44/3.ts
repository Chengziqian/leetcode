function decode(encoded: number[]): number[] {
  const sum: number[] = new Array(encoded.length + 1);
  sum[0] = encoded[0];
  for (let i = 1; i < encoded.length; i++) {
    sum[i] = encoded[i] ^ sum[i - 1];
  }
  let x0 = 0;
  for (let i = 0; i < sum.length; i++) {
    x0 ^= sum[i];
  }
  for (let i = 1; i <= encoded.length + 1; i++) {
    x0 ^= i;
  }
  const ans: number[] = new Array(encoded.length + 1);
  ans[0] = x0;
  for (let i = 0; i < encoded.length; i++) {
    ans[i + 1] = ans[i] ^ encoded[i];
  }
  return ans;
};