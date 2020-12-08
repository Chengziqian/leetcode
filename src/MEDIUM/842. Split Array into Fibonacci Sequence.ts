// 12/08/2020 MEDIUM

// https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/

/*
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

Example 1:

Input: "123456579"
Output: [123,456,579]
Example 2:

Input: "11235813"
Output: [1,1,2,3,5,8,13]
Example 3:

Input: "112358130"
Output: []
Explanation: The task is impossible.
Example 4:

Input: "0123"
Output: []
Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
Example 5:

Input: "1101111"
Output: [110, 1, 111]
Explanation: The output [11, 0, 11, 11] would also be accepted.
Note:

1 <= S.length <= 200
S contains only digits.

 */

// function splitIntoFibonacci(S: string): number[] {
//   if (!S.length) return [];
//  
//   const selected: string[][] = [[], []];
//   let selectedMaxLen = 0;
//   return dfs(0, 0);
//   function dfs(start: number, depth: number): number[] {
//     if (depth >= 2 || start >= S.length - 1) {
//       return check(+selected[0].join(''), +selected[1].join(''), S.slice(start));
//     }
//     for (let i = start; i < S.length - 1; i++) {
//       selected[depth].push(S[i]);
//       selectedMaxLen = Math.max(...selected.map(s => s.length));
//       if (selectedMaxLen > S.length - i - 1) {
//         selected[depth] = [];
//         return [];
//       }
//       const res = dfs(i + 1, depth + 1);
//       if (res.length) return res;
//       if (S[start] === '0') break; 
//     }
//     selected[depth] = [];
//     return [];
//   }
//  
//   function check(first: number, second: number, rest: string) {
//     const MAX = Math.pow(2, 31) - 1;
//     let f1 = first, f2 = second;
//     const ans = [f1, f2];
//     if (f1 > MAX || f2 > MAX) return [];
//     while (rest.length) {
//       const nextF2 = `${f1 + f2}`;
//       let i = 0;
//       for (; i < nextF2.length; i++) {
//         if (nextF2[i] !== rest[i]) return [];
//       }
//       rest = rest.slice(i);
//       f1 = f2;
//       f2 = +nextF2;
//       if (f2 > MAX) return [];
//       ans.push(f2);
//     }
//     return ans;
//   }
//  
// };

function splitIntoFibonacci(S: string): number[] {
  if (!S.length) return [];
  const selected: number[] = [];
  dfs(0, 0, 0);
  return selected;
  
  function dfs(index: number, sum: number, pre: number) {
    if (index >= S.length) {
      return selected.length >= 3;
    }
    let cur = 0;
    for (let i = index; i < S.length; i++) {
      if (i > index && S[index] === '0') break;
      cur = cur * 10 + (+S[i]);
      if (cur > Math.pow(2, 31) - 1) break;
      if (selected.length >= 2) {
        if (cur > sum) break;
        else if (cur < sum) continue;
      }
      selected.push(cur);
      if (dfs(i + 1, pre + cur, cur)) return true;
      else selected.pop();
    }
    return false;
  }

};
