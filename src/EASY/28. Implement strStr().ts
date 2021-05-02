// 10/22/2020 EASY

// https://leetcode-cn.com/problems/implement-strstr/

/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.

 */

// BF
// function strStr(haystack: string, needle: string): number {
//   if (!needle.length) return 0;
//   for (let i = 0; i < haystack.length; i++) {
//     let j = 0
//     for (; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) break;
//     }
//     if (j === needle.length) return i;
//   }
//   return -1;
// };

// KMP

function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0;
  if (!haystack.length) return -1;
  const next: number[] = new Array(needle.length);
  next[0] = -1;
  let k = -1;
  for (let i = 1; i < needle.length; i++) {
    while (k !== -1 && needle[k + 1] !== needle[i]) k = next[k];
    if (needle[k + 1] === needle[i]) k++;
    next[i] = k;
  }
  
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1] + 1;
      if (i + needle.length - j > haystack.length) return -1;
    }
    if (haystack[i] === needle[j]) j++;
    if (j === needle.length) return i - needle.length + 1;
  }
  return -1;
};
