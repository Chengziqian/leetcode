// 12/16/2020 EASY

// https://leetcode-cn.com/problems/word-pattern/

/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

 */
function wordPattern(pattern: string, s: string): boolean {
  const record: {[Key: string]: string} = {};
  const used: boolean[] = new Array(26).fill(false);
  const wordArr: string[] = s.split(' ');
  if (wordArr.length !== pattern.length) return false;
  for (let i = 0; i < wordArr.length; i++) {
    const currentPattern = pattern[i];
    if (!record[wordArr[i]]) {
      if (used[getCharCode(currentPattern)]) return false;
      record[wordArr[i]] = currentPattern;
      used[getCharCode(currentPattern)] = true;
    } else if (record[wordArr[i]] !== currentPattern) return false;
  }
  return true;
  
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
