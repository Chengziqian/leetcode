// 12/24/2020 MEDIUM

// https://leetcode-cn.com/problems/group-anagrams/

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

 */

function groupAnagrams(strs: string[]): string[][] {
  const record: {[key: string]: string[]} = {}
  const ans: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    const count: number[] = new Array(26).fill(0);
    for (let k = 0; k < strs[i].length; k++) count[getCharCode(strs[i][k])]++;
    let key = '';
    for (let k = 0; k < count.length; k++) {
      if (count[k] !== 0) key += `${String.fromCharCode('a'.charCodeAt(0) + k)}${count[k]}`
    }
    if (!record[key]) {
      record[key] = [strs[i]];
    } else {
      record[key].push(strs[i]);
    }
  }
  for (let key in record) {
    ans.push(record[key]);
  }
  
  return ans
  
  function getCharCode(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }
};
