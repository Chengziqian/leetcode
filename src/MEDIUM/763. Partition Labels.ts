// 10/22/2020 MEDIUM

// https://leetcode-cn.com/problems/partition-labels/

/*

A string S of lowercase English letters is given. 
We want to partition this string into as many parts as possible so that each letter appears in at most one part, 
and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.

 */

function partitionLabels(S: string): number[] {
  const rangeMap: {[Key: string]: number[]} = {};
  for (let i = 0; i < S.length; i++) {
    if (rangeMap[S[i]]) {
      rangeMap[S[i]][0] = Math.min(i, rangeMap[S[i]][0]);
      rangeMap[S[i]][1] = Math.max(i, rangeMap[S[i]][1]);
    } else {
      rangeMap[S[i]] = [];
      rangeMap[S[i]][0] = i;
      rangeMap[S[i]][1] = i;
    }
  }
  const keys = Object.keys(rangeMap).sort((a, b) => rangeMap[a][0] - rangeMap[b][0]);
  const ans: number[] = [];
  let currentRange: number[] = [0, 0];
  keys.forEach(key => {
     const keyRange = rangeMap[key];
     const left = Math.max(currentRange[0], keyRange[0]);
     const right = Math.min(currentRange[1], keyRange[1]);
     if (left <= right) {
       currentRange[0] = Math.min(currentRange[0], keyRange[0]);
       currentRange[1] = Math.max(currentRange[1], keyRange[1])
     } else {
       ans.push(currentRange[1] - currentRange[0] + 1);
       currentRange[0] = keyRange[0];
       currentRange[1] = keyRange[1];
     }
  });
  ans.push(currentRange[1] - currentRange[0] + 1);
  return ans;
};
