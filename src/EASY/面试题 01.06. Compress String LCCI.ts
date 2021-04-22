// 04/22/2021 EASY

// https://leetcode-cn.com/problems/compress-string-lcci/

/*
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

Example 1:

Input: "aabcccccaaa"
Output: "a2b1c5a3"
Example 2:

Input: "abbccd"
Output: "abbccd"
Explanation: 
The compressed string is "a1b2c2d1", which is longer than the original string.
 

Note:

0 <= S.length <= 50000

 */
function compressString(S: string): string {
  let compress: string = '';
  let index = 0;
  while (index < S.length) {
    let count = 1;
    compress += S[index];
    while (index + 1 < S.length && S[index] === S[index + 1]) {
      index++;
      count++;
    }
    compress += `${count}`;
    index++;
  }
  return compress.length < S.length ? compress : S;
};
