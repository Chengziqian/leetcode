// 09/24/2020 HARD

// https://leetcode-cn.com/problems/remove-duplicate-letters/

/**
 * 
 * Given a string which contains only lowercase letters, 
 * remove duplicate letters so that every letter appears once and only once. 
 * You must make sure your result is the smallest in lexicographical order among all possible results.

 Example 1:

 Input: "bcabc"
 Output: "abc"
 Example 2:

 Input: "cbacdcbc"
 Output: "acdb"
 Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 */

function removeDuplicateLetters(s: string): string {
  const stack: string[] = [];
  const count: { [Key: string]: number } = {};
  const inStack: { [Key: string]: boolean } = {};
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) count[s[i]]++;
    else count[s[i]] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    count[s[i]]--;
    if (inStack[s[i]]) continue;
    while (stack.length && stack[stack.length - 1] > s[i]) {
      if (count[stack[stack.length - 1]] === 0) break;
      inStack[stack.pop() as string] = false;
    }
    stack.push(s[i]);
    inStack[s[i]] = true;
  }
  let ans = "";
  while (stack.length) {
    ans = stack.pop() + ans;
  }
  return ans;
};
