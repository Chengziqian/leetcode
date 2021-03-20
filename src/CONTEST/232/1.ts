function areAlmostEqual(s1: string, s2: string): boolean {
  const n = s1.length;
  if (n === 1 && s1[0] !== s2[0]) return false; 
  let diff: number[] = [];
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) diff.push(i);
  }
  if (diff.length === 0) return true;
  if (diff.length !== 2) return false;
  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};