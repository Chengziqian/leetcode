function longestNiceSubstring(s: string): string {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    const lowerChar: boolean[] = new Array(26).fill(false);
    const upperChar: boolean[] = new Array(26).fill(false);
    for (let j = i; j < s.length; j++) {
      if (s[j] >= 'a' && s[j] <= 'z') lowerChar[getIndex(s[j])] = true;
      else upperChar[getIndex(s[j])] = true;
      let k = 0
      for (; k < 26; k++) {
        if (lowerChar[k] && upperChar[k]) continue;
        else if (!lowerChar[k] && !upperChar[k]) continue;
        else break;
      }
      if (k === 26) {
        if (j - i + 1 > ans.length) {
          ans = s.substr(i, j - i + 1);
        }
      }
    }
  }
  return ans;
  
  function getIndex(char: string) {
    if (char >= 'a' && char <= 'z') return char.charCodeAt(0) - 'a'.charCodeAt(0);
    else return char.charCodeAt(0) - 'A'.charCodeAt(0);
  }
};
