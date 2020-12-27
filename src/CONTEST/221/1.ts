function halvesAreAlike(s: string): boolean {
  const half = s.length >> 1;
  let count = 0;
  // 简单计数
  const record: string[] = ['a','e','i','o','u','A','E','I','O','U'];
  for (let i = 0; i < half; i++) {
    if (record.includes(s[i])) count++;
  }
  for (let i = half; i < s.length; i++) {
    if (record.includes(s[i])) count--;
  }
  return count === 0;
};