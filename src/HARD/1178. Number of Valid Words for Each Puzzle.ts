// 02/26/2021 HARD

// https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle

/*
With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:
word contains the first letter of puzzle.
For each letter in word, that letter is in puzzle.
For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).
Return an array answer, where answer[i] is the number of words in the given word list words that are valid with respect to the puzzle puzzles[i].
 

Example :

Input: 
words = ["aaaa","asas","able","ability","actt","actor","access"], 
puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
Output: [1,1,3,2,4,0]
Explanation:
1 valid word for "aboveyz" : "aaaa" 
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
 

Constraints:

1 <= words.length <= 10^5
4 <= words[i].length <= 50
1 <= puzzles.length <= 10^4
puzzles[i].length == 7
words[i][j], puzzles[i][j] are English lowercase letters.
Each puzzles[i] doesn't contain repeated characters.

 */
import { TrieTree } from '../../utils/TrieTree';

// function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
//   const tree: TrieTree = new TrieTree();
//   for (let i = 0; i < words.length; i++) {
//     tree.add(words[i]);
//   }
//   let ans: number[] = new Array(puzzles.length).fill(0);
//   for (let i = 0; i < puzzles.length; i++) {
//     const current = puzzles[i];
//     const first = current[0];
//     const record: Map<string, boolean> = new Map<string, boolean>();
//     for (let k = 0; k < current.length; k++) {
//       record.set(current[k], true);
//     }
//     ans[i] = dfs(tree, record, first, false);
//   }
//   return ans;
//   function dfs(tire: TrieTree, record: Map<string, boolean>, first: string, hasFirst: boolean) {
//     let ans = 0;
//     if (tire.isKey && hasFirst) {
//       ans += tire.freq;
//     }
//     for (let t of tire) {
//       if (t && record.has(t.char)) {
//         ans += dfs(t, record, first, hasFirst || t.char === first);
//       }
//     }
//     return ans;
//   }
// };

function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const freq: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < words.length; i++) {
    let mask = 0
    for (let k = 0; k < words[i].length; k++) {
      mask |= 1 << getIndex(words[i][k]);
    }
    freq.set(mask, freq.has(mask) ? freq.get(mask) + 1 : 1);
  }
  
  const ans: number[] = new Array(puzzles.length).fill(0);
  for (let i = 0; i < puzzles.length; i++) {
    const first = 1 << getIndex(puzzles[i][0]);
    ans[i] += freq.has(first) ? freq.get(first) : 0;
    let set = 0;
    for (let k = 1; k < puzzles[i].length; k++) {
      set |= 1 << getIndex(puzzles[i][k]);
    }
    for (let sub = set; sub; sub = (sub - 1) & set) {
      ans[i] += freq.has(sub | first) ? freq.get(sub | first) : 0;
    }
  }
  return ans;
  
  function getIndex(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
};
