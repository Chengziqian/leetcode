// 04/02/2021 MEDIUM

// https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/*
Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
Example 4:

Input: s = "rhythms", k = 4
Output: 0
Explanation: We can see that s doesn't have any vowel letters.
Example 5:

Input: s = "tryhard", k = 4
Output: 1
 

Constraints:

1 <= s.length <= 10^5
s consists of lowercase English letters.
1 <= k <= s.length

 */
function maxVowels(s: string, k: number): number {
  let left = 0, right = left + k - 1;
  let current = 0;
  const list = ['a', 'e', 'i', 'o', 'u'];
  for (let i = left; i <= right; i++) {
    if (list.includes(s[i])) current++;
  }
  let ans = current;
  while (right < s.length) {
    if (list.includes(s[left])) current--;
    if (right + 1 < s.length && list.includes(s[right + 1])) current++;
    ans = Math.max(ans, current);
    left++;
    right++;
  }
  return ans;
};

