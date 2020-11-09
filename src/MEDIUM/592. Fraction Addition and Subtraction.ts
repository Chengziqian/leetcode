// 10/20/2020 MEDIUM

// https://leetcode-cn.com/problems/fraction-addition-and-subtraction/

/*

Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. The final result should be irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:
Input:"-1/2+1/2"
Output: "0/1"
Example 2:
Input:"-1/2+1/2+1/3"
Output: "1/3"
Example 3:
Input:"1/3-1/2"
Output: "-1/6"
Example 4:
Input:"5/3+1/3"
Output: "2/1"
Note:
The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1,10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

 */

function fractionAddition(expression: string): string {
  const regx = /[+-]?(\d+\/\d+)/g;
  const arr = expression.match(regx);
  if (!arr || !arr.length) return '';
  const first = arr[0].split('/');
  let top: number, bottom: number;
  if (first[0][0] === '-') {
    top = -first[0].slice(1);
  } else {
    top = +first[0]
  }
  bottom = +first[1];
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i].split('/');
    let curTop = 0, curBottom = 0;
    if (cur[0][0] === '-') {
      curTop = -cur[0].slice(1);
    } else {
      curTop = +cur[0]
    }
    curBottom = +cur[1];
    const LCM = (curBottom * bottom) / getGCD(curBottom, bottom);
    top = top * LCM / bottom + curTop * LCM / curBottom;
    bottom = LCM;
    curBottom = LCM;
  }
  if (top === 0) {
    return "0/1";
  }
  const finalGCD = getGCD(Math.abs(top), bottom);
  return `${top / finalGCD}/${bottom / finalGCD}`;
  function getGCD(a: number, b: number) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let remain = max % min;
    while (remain) {
      max = min;
      min = remain;
      remain = max % min;
    }
    return min;
  }
};
