// 09/24/2020 MEDIUM

// https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china

/**
 *Return the lexicographically smallest subsequence of text that contains all the distinct characters of text exactly once.

 Example 1:

 Input: "cdadabcc"
 Output: "adbc"
 Example 2:

 Input: "abcd"
 Output: "abcd"
 Example 3:

 Input: "ecbacba"
 Output: "eacb"
 Example 4:

 Input: "leetcode"
 Output: "letcod"
  

 Constraints:

 1 <= text.length <= 1000
 text consists of lowercase English letters.
 *
 */

function smallestSubsequence(text: string): string {
  const stack: string[] = [];
  const count: { [Key: string]: number } = {};
  const inStack: { [Key: string]: boolean } = {};
  for (let i = 0; i < text.length; i++) {
    if (count[text[i]]) count[text[i]]++;
    else count[text[i]] = 1;
  }
  for (let i = 0; i < text.length; i++) {
    count[text[i]]--;
    if (inStack[text[i]]) continue;
    while (stack.length && stack[stack.length - 1] > text[i]) {
      if (count[stack[stack.length - 1]] === 0) break;
      inStack[stack.pop() as string] = false;
    }
    stack.push(text[i]);
    inStack[text[i]] = true;
  }
  let ans = "";
  while (stack.length) {
    ans = stack.pop() + ans;
  }
  return ans;
};
