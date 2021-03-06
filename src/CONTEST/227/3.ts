function largestMerge(word1: string, word2: string): string {
  let merge = '';
  let i = 0, j = 0;
  while (i < word1.length || j < word2.length) {
    if (i >= word1.length) {
      merge += word2.substr(j);
      break;
    }
    if (j >= word2.length) {
      merge += word1.substr(i);
      break;
    }
    if (word1[i] > word2[j]) merge += word1[i++];
    else if (word2[j] > word1[i]) merge += word2[j++];
    else {
      let ii = i;
      let jj = j;
      while (ii < word1.length && jj < word2.length && word1[ii] === word2[jj]) {
        ii++;
        jj++;
      }
      const common = word1.substr(i, ii - i);
      merge += common;
      if (ii >= word1.length) {
        j = jj;
        continue;
      }
      if (jj >= word2.length) {
        i = ii;
        continue;
      }
      if (word1[ii] > word2[jj]) i = ii;
      else j = jj;
    }
  }
  return merge;
};
