// 12/27/2020 EASY

// https://leetcode-cn.com/problems/isomorphic-strings/

/* 
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.

*/

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const mapS = mapChar(s);
  const mapT = mapChar(t);

  return mapS.join('') === mapT.join('');


  function mapChar(s: string): number[] {
    const map: Map<string, number> = new Map<string, number>();
    const ans: number[] = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) map.set(s[i], i);
      ans[i] = map.get(s[i]);
    }
    return ans;
  }
};