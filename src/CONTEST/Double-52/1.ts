function sortSentence(s: string): string {
  const wordList = s.split(' ');
  const ans: string[] = new Array(wordList.length);
  for (let i = 0; i < wordList.length; i++) {
    ans[+wordList[i][wordList[i].length - 1] - 1] = wordList[i].substr(0, wordList[i].length - 1);
  }
  return ans.join(' ');
};