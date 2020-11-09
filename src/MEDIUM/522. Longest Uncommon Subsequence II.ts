// 10/20/2020 MEDIUM

// https://leetcode-cn.com/problems/longest-uncommon-subsequence-ii/

/*

Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Example 1:
Input: "aba", "cdc", "eae"
Output: 3
Note:

All the given strings' lengths will not exceed 10.
The length of the given list will be in the range of [2, 50].

 */

function findLUSlength(strs: string[]): number {
  let ans = -1;
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    for (; j < strs.length; j++) {
      if (j !== i && isSubsequence(strs[i], strs[j])) break;
    }
    if (j === strs.length) ans = Math.max(ans, strs[i].length);
  }
  return ans;
  function isSubsequence(s1: string, s2: string) {
    let i = 0, j = 0;
    while (i < s1.length && j < s2.length) {
      if (s1[i] === s2[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }
    return i === s1.length;
  }
};
