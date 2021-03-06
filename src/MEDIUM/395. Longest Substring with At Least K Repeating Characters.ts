// 02/27/2021 MEDIUM

// https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/

/*
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

 

Example 1:

Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 105

*/

function longestSubstring(s: string, k: number): number {
  return dfs(0, s.length - 1);

  function dfs(left: number, right: number): number {
    if (right - left + 1 < k) return 0;
    const count: number[] = new Array(26).fill(0);
    for(let i = left; i <= right; i++) {
      count[getIndex(s[i])]++;
    }

    for (let i = left; i <= right; i++) {
      if (count[getIndex(s[i])] < k) {
        return Math.max(dfs(left, i - 1), dfs(i + 1, right));
      }
    }
    return right - left + 1;
  }

  function getIndex(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};

