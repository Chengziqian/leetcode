// 11/15/2020 MEDIUM

// https://leetcode-cn.com/problems/remove-k-digits/

/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

 */

// function removeKdigits(num: string, k: number): string {
//   if (k >= num.length) return '0';
//   let stringArr = [...num];
//   for (let i = 0; i < k; i++) {
//     for (let i = 0; i < stringArr.length; i++) {
//       if (i === stringArr.length - 1) {
//         stringArr.splice(i, 1);
//       }
//       if (stringArr[i] > stringArr[i + 1]) {
//         stringArr.splice(i, 1);
//         break;
//       }
//     }
//     let endIndex = 0;
//     while (endIndex < stringArr.length && stringArr[endIndex] === '0') endIndex++;
//     stringArr = stringArr.slice(endIndex);
//   }
//   return stringArr.join('') || '0';
// };

function removeKdigits(num: string, k: number): string {
  let stack: string[] = [];
  for (let digit of num) {
    while (stack.length && stack[stack.length - 1] > digit && k) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k--) stack.pop();

  let endIndex = 0;
  while (endIndex < stack.length && stack[endIndex] === '0') endIndex++;
  stack = stack.slice(endIndex);
  return stack.join('') || '0';
};