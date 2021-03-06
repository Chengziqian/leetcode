// 02/10/2021 MEDIUM LABEL: slide window

// https://leetcode-cn.com/problems/permutation-in-string/

/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 

Constraints:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

 */
function checkInclusion(s1: string, s2: string): boolean {
  const target: number[] = new Array(26).fill(0);
  const record: number[] = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    target[getCharCode(s1[i])]++;
  }
  
  let left = 0, right = 0;
  const k = s1.length;
  
  while (right < s2.length) {
    const rightCharIndex = getCharCode(s2[right]);
    const leftCharIndex = getCharCode(s2[left]);
    if (right < k) {
      record[rightCharIndex]++;
      right++;
      if (right === k) {
        if (check()) return true;
      }
    } else {
      record[rightCharIndex]++;
      record[leftCharIndex]--;
      if (check()) return true;
      left++;
      right++;
    }
  }
  return false;
  
  function check() {
    for (let i = 0; i < 26; i++) {
      if (target[i] !== record[i]) return false;
    }
    return true;
  }
  
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
