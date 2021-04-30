// 04/29/2021 HARD

// https://leetcode-cn.com/problems/minimum-window-substring/

/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
 

Constraints:

1 <= s.length, t.length <= 105
s and t consist of English letters.
 

Follow up: Could you find an algorithm that runs in O(n) time?

 */

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return '';
  const targetCount: number[] = new Array(52).fill(0);
  for (let i = 0; i < t.length; i++) targetCount[getCharCode(t[i])]++;
  let left = 0, right = 0;
  let minLen = Number.MAX_SAFE_INTEGER, ans = '';
  const slideCount: number[] = new Array(52).fill(0);
  while (right < s.length) {
    slideCount[getCharCode(s[right])]++;
    right++;
    while (check()) {
      if (right - left < minLen) {
        minLen = right - left;
        ans = s.substr(left, right - left);
      }
      slideCount[getCharCode(s[left])]--;
      left++; 
    }
  }
  return ans;
  
  function check() {
    for (let i = 0; i < 52; i++) {
      if (targetCount[i] > 0 && targetCount[i] > slideCount[i]) return false;
    }
    return true;
  }
  function getCharCode(char: string) {
    if (char >= 'a') return char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
    else return char.charCodeAt(0) - 'A'.charCodeAt(0);
  }
};
