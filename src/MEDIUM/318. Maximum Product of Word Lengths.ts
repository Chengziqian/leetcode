// 11/03/2020 MEDIUM

// https://leetcode-cn.com/problems/maximum-product-of-word-lengths/

/*
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. 
You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
 

Constraints:

0 <= words.length <= 10^3
0 <= words[i].length <= 10^3
words[i] consists only of lowercase English letters.
 */

function maxProduct(words: string[]): number {
  const maskMap: {[Key: string]: number} = {};
  for (let i = 0; i < words.length; i++) {
    let mask = 0;
    for (let k = 0; k < words[i].length; k++) {
      const n = words[i][k].charCodeAt(0) - "a".charCodeAt(0);
      mask |= 1 << n;
    }
    maskMap[mask] = Math.max(maskMap[mask] || 0, words[i].length);
  }
  const keys = Object.keys(maskMap);
  let ans = 0;
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (i !== j && (+keys[i] & +keys[j]) === 0) {
        ans = Math.max(ans, maskMap[keys[i]] * maskMap[keys[j]])
      }
    }
  }
  return ans;
};
