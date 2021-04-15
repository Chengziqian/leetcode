// 04/15/2021 HEAD

// https://leetcode-cn.com/problems/distinct-echo-substrings/

/*
Return the number of distinct non-empty substrings of text
that can be written as the concatenation of some string with itself 
(i.e. it can be written as a + a where a is some string).

 

Example 1:

Input: text = "abcabcabc"
Output: 3
Explanation: The 3 substrings are "abcabc", "bcabca" and "cabcab".
Example 2:

Input: text = "leetcodeleetcode"
Output: 2
Explanation: The 2 substrings are "ee" and "leetcodeleetcode".
 

Constraints:

1 <= text.length <= 2000
text has only lowercase English letters.

 */
// function distinctEchoSubstrings(text: string): number {
//   const L = text.length >> 1;
//   const record: Set<string> = new Set<string>();
//   for (let len = 1; len <= L; len++) {
//     for (let index = len; index <= text.length - len; index++) {
//       const str1 = text.substr(index, len);
//       const str2 = text.substr(index - len, len);
//       if (str1 === str2) record.add(str1);
//     }
//   }
//   return record.size;
// };

function distinctEchoSubstrings(text: string): number {
  const MOD = 3e6 + 7;
  const BASE = 31;
  const pre: number[] = new Array(text.length + 1);
  const mul: number[] = new Array(text.length + 1);
  pre[0] = 0;
  mul[0] = 1;
  for (let i = 0; i < text.length; i++) {
    pre[i + 1] = (pre[i] * BASE + getCharCode(text[i])) % MOD;
    mul[i + 1] = (mul[i] * BASE) % MOD;
  }
  const record: Set<number> = new Set<number>();
  const L = text.length >> 1;
  for (let len = 1; len <= L; len++) {
    for (let index = len; index <= text.length - len; index++) {
      const hash1 = hash(index, index + len - 1);
      const hash2 = hash(index - len, index - 1);
      if (hash1 === hash2) record.add(hash1);
    }
  }
  return record.size;
  
  function hash(i: number, j: number) {
    return (pre[j + 1] - (pre[i] * mul[j - i + 1]) % MOD + MOD) % MOD;
  }
  
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }
};
