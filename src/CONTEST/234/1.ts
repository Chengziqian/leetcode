function numDifferentIntegers(word: string): number {
  const record: Set<number> = new Set<number>();
  let i = 0;
  while (i < word.length) {
    while(i < word.length && (word[i] < '0' || word[i] > '9')) i++;
    let d = '';
    while(i < word.length && (word[i] >= '0' && word[i] <= '9')) d += word[i++];
    if (d.length) record.add(+d);
  }
  return record.size;
};