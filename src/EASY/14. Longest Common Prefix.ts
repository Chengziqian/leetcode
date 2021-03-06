// 01/30/2021 EASY

// https://leetcode-cn.com/problems/longest-common-prefix/

/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

function longestCommonPrefix(strs: string[]): string {
  let str = '';
  if (!strs.length) return str;
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }
  for (let i = 0; i < minLen; i++) {
    let k = 1;
    const char = strs[0][i];
    for (; k < strs.length; k++) {
      if (strs[k][i] !== char) break;
    }
    if (k === strs.length) str += char;
    else break;
  }
  return str;
};