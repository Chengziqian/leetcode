// 10/29/2020 MEDIUM

// https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/

/*
You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
Example 4:

Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"
 

Constraints:

0 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It's guaranteed that all parentheses are balanced.

 */
function reverseParentheses(s: string): string {
  const stack: string[] = [];
  stack.push('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('');
    } else if (s[i] === ')') {
      const str: string = stack.pop() as string;
      const reverse = str.split('').reverse().join('');
      stack[stack.length - 1] += reverse;
    } else {
      stack[stack.length - 1] += s[i]
    }
  }
  return stack[0];
};
