function beautySum(s: string): number {
  let ans = 0;
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      const count: number[] = new Array(26).fill(0);
      for (let k = i; k <= j; k++) {
        count[getIndex(s[k])]++;
      }
      let max = Number.MIN_SAFE_INTEGER;
      let min = Number.MAX_SAFE_INTEGER;
      for (let n = 0; n < count.length; n++) {
        if (count[n] === 0) continue;
        if (count[n] > max) max = count[n];
        if (count[n] < min) min = count[n];
      }
      ans += max - min;
    }
  }
  return ans;
  function getIndex(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};