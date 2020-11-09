// 09/08/2020 MEDIUM

// https://leetcode.com/problems/complex-number-multiplication/

function complexNumberMultiply(a: string, b: string): string {
  const regx = /^(-?\d+)\+(-?\d+)i$/;
  const matchA = a.match(regx);
  const matchB = b.match(regx);
  if (matchA && matchB) {
    const realA = +matchA[1], imaginaryA = +matchA[2], realB = +matchB[1], imaginaryB = +matchB[2];
    const realRes = realA * realB + (-1) * imaginaryA * imaginaryB;
    const imaginaryRes = imaginaryA * realB + realA * imaginaryB;
    return `${realRes}+${imaginaryRes}i`;
  }
  return '';
};
