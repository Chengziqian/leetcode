// 11/22/2020 EASY

// https://leetcode-cn.com/problems/valid-anagram/

/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

function isAnagram(s: string, t: string): boolean {
  const arr: number[] = new Array(26).fill(0);

  if (s.length !== t.length) return false;

  for(let i = 0; i < s.length; i++) {
    arr[getcharCode(s[i])]++;
    arr[getcharCode(t[i])]--;
  }

  return arr.every(n => n === 0);

  function getcharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};