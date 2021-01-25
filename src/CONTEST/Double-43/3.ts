function constructDistancedSequence(n: number): number[] {
  const ans: number[] = new Array((n - 1) * 2 + 1).fill(-1);
  const set: boolean[] = new Array(20).fill(false);
  let index = 0;
  for (let i = n; i > 1; i -= 2) {
    ans[index] = i;
    ans[index + i] = i;
    index++;
  }
  let next = n - 1;
  while (index < ans.length) {
    if (ans[index] !== -1) {
      index++;
      continue;
    }
    for (let i = n - 1; i > 1; i -= 2) {
      if (index + i > ans.length || set[i] || ans[index + i] !== -1) continue;
      if (i === 1) ans[index] = 1;
      else {
        set[i] = true;
        ans[index] = i;
        ans[index + i] = i;
      }
    }
    index++;
  }
  return ans;
};