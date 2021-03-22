function checkOnesSegment(s: string): boolean {
  let ans = 0;
  let last = '0';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1' && last == '0') {
        ans++;
    }
    last = s[i];
  }
  return ans <= 1;
};