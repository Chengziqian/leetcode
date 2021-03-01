function minOperations(s: string): number {
  let flag = false;
  let ans1 = 0;
  let ans2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (flag) {
      if (s[i] === '0') ans1++;
      if (s[i] === '1') ans2++;
    } else {
      if (s[i] === '1') ans1++;
      if (s[i] === '0') ans2++;
    }
    flag = !flag;
  }
  return Math.min(ans2, ans1);
};
