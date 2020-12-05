function maxRepeating(sequence: string, word: string): number {
  let ans = 0;
  for (let i = 0; i < sequence.length; i++) {
    let count = 0;
    for (let j = i; j < sequence.length;) {
      const subStr = sequence.slice(j, j + word.length);
      if (subStr === word) {
        count++;
        j += word.length
      } else {
        break;
      }
    }
    ans = Math.max(ans, count);
  }
  return ans;
};