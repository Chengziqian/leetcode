function decode(encoded: number[], first: number): number[] {
  const ans: number[] = new Array(encoded.length + 1);
  ans[0] = first;
  for (let i = 0; i < encoded.length; i++) {
    ans[i + 1] = encoded[i] ^ ans[i];
  }
  return ans;
};