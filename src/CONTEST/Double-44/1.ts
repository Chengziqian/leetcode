function largestAltitude(gain: number[]): number {
  let ans = Math.max(0, gain[0]);
  for (let i = 1; i < gain.length; i++) {
    gain[i] = gain[i - 1] + gain[i];
    ans = Math.max(ans, gain[i])
  }
  return ans;
};