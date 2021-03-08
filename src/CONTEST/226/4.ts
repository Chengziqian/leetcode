function checkPartitioning(s: string): boolean {
  const record: boolean[][] = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    record[i] = new Array(s.length).fill(false);
  }

  for (let i = 0; i < s.length; i++) {
    let l = i, r = i;
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      record[l][r] = true;
      l--;
      r++;
    }
    l = i, r = i + 1;
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      record[l][r] = true;
      l--;
      r++;
    }
  }

  for (let i = 0; i + 2 < s.length; i++) {
    for (let j = i + 1; j + 1 < s.length; j++) {
      if (record[0][i] && record[i + 1][j] && record[j + 1][s.length - 1]) return true;
    }
  }
  return false;
};