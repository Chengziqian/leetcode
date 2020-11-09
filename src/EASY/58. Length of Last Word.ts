// 10/19/2020 EASY

// https://leetcode-cn.com/problems/length-of-last-word/

/*

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5

 */

function lengthOfLastWord(s: string): number {
  if (!s.length) return 0;
  const wordArr = s.split(' ');
  let index = wordArr.length - 1;
  while (index >= 0 && wordArr[index].length === 0) index--;
  return index < 0 ? 0 : wordArr[index].length;
};
