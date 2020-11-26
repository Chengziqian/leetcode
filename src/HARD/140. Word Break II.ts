// 11/25/2020 HARD

// https://leetcode-cn.com/problems/word-break-ii/

/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
add spaces in s to construct a sentence where each word is a valid dictionary word.
 Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]

 */
namespace WordBreadII {
  function wordBreak(s: string, wordDict: string[]): string[] {
    const map = new Set(wordDict);
    const record: string[][] = new Array(s.length);
    return dfs(0).map(str => str.slice(0, str.length - 1));
    
    function dfs(index: number) {
      if (record[index]) {
        return record[index];
      }
      if (index >= s.length) {
        return ['']
      }
      const res: string[] = [];
      for (let i = index; i < s.length; i++) {
        const str = s.slice(index, i + 1);
        if (map.has(str)) {
          const rest = dfs(i + 1);
          for (let restStr of rest) {
            res.push([str, restStr].join(' '))
          }
        }
      }
      record[index] = res;
      return res;
    }
  }
}
