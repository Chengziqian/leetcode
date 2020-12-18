// 12/15/2020 MEDIUM

// https://leetcode-cn.com/problems/monotone-increasing-digits/

/*
Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

Example 1:
Input: N = 10
Output: 9
Example 2:
Input: N = 1234
Output: 1234
Example 3:
Input: N = 332
Output: 299
Note: N is an integer in the range [0, 10^9].

 */
// function monotoneIncreasingDigits(N: number): number {
//   const numberArr = `${N}`.split('');
//   let ans: number[] = [];
//   dfs(0, 0);
//   let index = 0;
//   while (index < ans.length && ans[index] === 0) index++;
//   return +(ans.slice(index).join(''));
//  
//   function dfs(index: number, minCandidate: number) {
//     if (index >= numberArr.length) return true;
//     const curNumber = +numberArr[index];
//     if (minCandidate <= curNumber) {
//       ans.push(curNumber);
//       if (!dfs(index + 1, curNumber)) {
//         if (curNumber - 1 >= minCandidate) {
//           ans[ans.length - 1] = curNumber - 1;
//           let leftLen = numberArr.length - ans.length;
//           while (leftLen--) ans.push(9);
//           return true;
//         } else {
//           ans.pop();
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false
//     }
//   }
// };

function monotoneIncreasingDigits(N: number): number {
  const numberArr: number[] = `${N}`.split('').map(i => +i);
  let firstDown = 0;
  while (firstDown + 1 < numberArr.length && numberArr[firstDown] <= numberArr[firstDown + 1]) firstDown++;
  if (firstDown === numberArr.length - 1) return N;
  let startIndex = firstDown;
  while (startIndex >= 1 && numberArr[startIndex - 1] === numberArr[startIndex]) startIndex--;
  numberArr[startIndex]--;
  for (let i = startIndex + 1; i < numberArr.length; i++) {
    numberArr[i] = 9;
  }
  let index = 0;
  while (index < numberArr.length && numberArr[index] === 0) index++;
  return +(numberArr.slice(index).join(''));
};
