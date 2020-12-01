// 11/20/2020 MEDIUM

// https://leetcode-cn.com/problems/reorganize-string/

/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].
 

 */

function reorganizeString(S: string): string {
  const charCount = new Array(26).fill(0);
  let maxCountCharIndex = 0;
  let maxCount = 0;
  for (let i = 0; i < S.length; i++) {
    const currentCharIndex = getCharCode(S[i])
    charCount[currentCharIndex]++;
    if (maxCount < charCount[currentCharIndex]) {
      maxCount = charCount[currentCharIndex];
      maxCountCharIndex = currentCharIndex;
    }
    if (maxCount > (S.length + 1) >> 1) return '';
  }
  const ans = new Array(S.length);
  let index = 0;
  while (charCount[maxCountCharIndex]) {
    ans[index] = String.fromCharCode('a'.charCodeAt(0) + maxCountCharIndex);
    index += 2;
    charCount[maxCountCharIndex]--;
  }
  for (let i = 0; i < charCount.length; i++) {
    const curChar = String.fromCharCode('a'.charCodeAt(0) + i);
    while (charCount[i]) {
      if (index >= ans.length) index = 1;
      ans[index] = curChar
      index += 2;
      charCount[i]--;
    }
  }
  return ans.join('');
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
