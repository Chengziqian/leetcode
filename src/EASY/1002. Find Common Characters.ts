// 10/14/2020 EASY

// https://leetcode-cn.com/problems/find-common-characters/

/*

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates). 
For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.


Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter


 */

function commonChars(A: string[]): string[] {
  const occursMap: { [Key: string]: number } = {};
  const first = A[0];
  for (let i = 0; i < first.length; i++) {
    if (!occursMap[first[i]]) {
      occursMap[first[i]] = 1;
    } else {
      occursMap[first[i]]++;
    }
  }
  for (let i = 1; i < A.length; i++) {
    const tempMap: { [Key: string]: number } = {};
    for (let j = 0; j < A[i].length; j++) {
      if (!tempMap[A[i][j]]) {
        tempMap[A[i][j]] = 1;
      } else {
        tempMap[A[i][j]]++;
      }
    }
    Object.keys(occursMap).forEach(key => {
      occursMap[key] = Math.min(occursMap[key], tempMap[key] || 0);
    })
  }
  const ans: string[] = [];
  Object.keys(occursMap).forEach(key => {
    if (occursMap[key] > 0) {
      for (let i = 0; i < occursMap[key]; i++) {
        ans.push(key);
      }
    }
  })
  return ans;
};
