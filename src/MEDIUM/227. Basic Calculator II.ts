// 03/11/2021 MEDIUM

// https://leetcode-cn.com/problems/basic-calculator-ii/

/*
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

 */


function calculate(s: string): number {
  const stack: number[] = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + +s[i];
    } 
    if (s[i] === '+' || s[i] === '-'|| s[i] === '*' || s[i] === '/' || i === s.length - 1) {
      switch (sign) {
        case '+':
          stack.push(+num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack[stack.length - 1] *= num;
          break;
        case '/':
          if (stack[stack.length - 1] < 0) {
            stack[stack.length - 1] = -Math.floor(-stack[stack.length - 1] / num);
          } else {
            stack[stack.length - 1] = Math.floor(stack[stack.length - 1] / num);
          }
          break;
        default:
          break;
      }
      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
};
