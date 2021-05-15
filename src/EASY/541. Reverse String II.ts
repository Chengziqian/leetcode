// 05/10/2021 EASY

// https://leetcode-cn.com/problems/reverse-string-ii/

/*
Given a string s and an integer k, 
reverse the first k characters for every 2k characters 
counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, 
then reverse the first k characters and left the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104

 */

function reverseStr(s: string, k: number): string {
  const strArr = s.split('');
  reverse(0);
  return strArr.join('');
  function reverse(index: number) {
    if (index >= s.length) return;
    let left = index, right = index + k - 1;
    if (right >= s.length) right = s.length - 1;
    while (left <= right) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    }
    reverse(index + 2 * k);
  }
};
