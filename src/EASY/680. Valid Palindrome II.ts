// 11/21/2020 EASY

// https://leetcode-cn.com/problems/valid-palindrome-ii/

/* 
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

*/

function validPalindrome(s: string): boolean {
  let left = 0, right = s.length - 1;
  while(left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else if (left + 1 === right) {
      return true;
    } else {
      return isPalindrome(left, right - 1) || isPalindrome(left + 1, right);
    }
  }
  return true;

  function isPalindrome(left: number, right: number) {
    while (left < right && s[left] === s[right]) {
      left++;
      right--;
    }
    if(left >= right) return true;
    else return false;
  }
};