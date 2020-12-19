function countConsistentStrings(allowed: string, words: string[]): number {
  const allowMap: {[Key : string]: boolean} = {};
  for (let i = 0; i < allowed.length; i++) {
    allowMap[allowed[i]] = true;
  }
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let index = 0;
    while(index < words[i].length && allowMap[words[i][index]]) index++;
    if (index === words[i].length) ans++;
  }
  return ans;
};