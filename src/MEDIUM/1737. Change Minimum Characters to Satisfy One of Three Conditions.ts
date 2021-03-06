// 01/25/2021 MEDIUM

// https://leetcode-cn.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/

/*
You are given two strings a and b that consist of lowercase letters. In one operation, you can change any character in a or b to any lowercase letter.

Your goal is to satisfy one of the following three conditions:

Every letter in a is strictly less than every letter in b in the alphabet.
Every letter in b is strictly less than every letter in a in the alphabet.
Both a and b consist of only one distinct letter.
Return the minimum number of operations needed to achieve your goal.

 

Example 1:

Input: a = "aba", b = "caa"
Output: 2
Explanation: Consider the best way to make each condition true:
1) Change b to "ccc" in 2 operations, then every letter in a is less than every letter in b.
2) Change a to "bbb" and b to "aaa" in 3 operations, then every letter in b is less than every letter in a.
3) Change a to "aaa" and b to "aaa" in 2 operations, then a and b consist of one distinct letter.
The best way was done in 2 operations (either condition 1 or condition 3).
Example 2:

Input: a = "dabadd", b = "cda"
Output: 3
Explanation: The best way is to make condition 1 true by changing b to "eee".
 

Constraints:

1 <= a.length, b.length <= 105
a and b consist only of lowercase letters.

 */

function minCharacters(a: string, b: string): number {
  const charCount: number[] = new Array(26).fill(0);
  const aCharCount: number[] = new Array(26).fill(0);
  const bCharCount: number[] = new Array(26).fill(0);
  for (let i = 0; i < a.length; i++) {
    const index = getCharIndex(a[i])
    charCount[index]++;
    aCharCount[index]++;
  }
  for (let i = 0; i < b.length; i++) {
    const index = getCharIndex(b[i])
    charCount[index]++;
    bCharCount[index]++;
  }
  let ans = a.length + b.length - Math.max(...charCount);
  replace(aCharCount, bCharCount);
  replace(bCharCount, aCharCount);
  return ans;
  
  function replace(upper: number[], lower: number[]) {
    for (let i = 1; i <= 25; i++) {
      let total = 0
      for (let k = 0; k < i; k++) {
        total += upper[k];
      }
      for (let k = i; k <= 25; k++) {
        total += lower[k];
      }
      ans = Math.min(ans, total);
    }
  }
  function getCharIndex(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
