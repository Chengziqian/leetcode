// 03/07/2021 MEDIUM

// https://leetcode-cn.com/problems/palindrome-partitioning/

/*
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.

*/

function partition(s: string): string[][] {
  const dp: boolean[][] = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }
  for (let i = 0; i < s.length; i++) {
    let l = i, r = i;
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      dp[l][r] = true;
      l--;
      r++;
    }
    l = i, r = i + 1;
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      dp[l][r] = true;
      l--;
      r++;
    }
  }
  const ans: string[][] = [];
  const path: string[] = [];
  dfs(0);
  return ans;

  function dfs(i: number) {
    if (i === s.length) {
      ans.push([...path]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (dp[i][j]) {
        path.push(s.substr(i, j - i + 1));
        dfs(j + 1);
        path.pop();
      }
    }
  }
};