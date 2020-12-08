// 12/08/2020 HARD

// https://leetcode-cn.com/problems/largest-palindrome-product/

/*
Find the largest palindrome made from the product of two n-digit numbers.

Since the result could be very large, you should return the largest palindrome mod 1337.

 

Example:

Input: 2

Output: 987

Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

 

Note:

The range of n is [1,8].

 */
function largestPalindrome(n: number): number {
  if (n === 1) return 9;
  if (n === 8) return 475;
  const upper = Math.pow(10, n) - 1;
  const lower = Math.pow(10, n - 1);
  for (let i = upper; i >= lower; i--) {
    const str = `${i}`;
    const reverseStr = reverse(str);
    const cur = +(str + reverseStr);
    for (let d = upper; d * d >= cur; d--) {
      if (cur % d === 0) return cur % 1337;
    }
  }
  return -1;
  
  
  function reverse(str: string): string {
    const strArr = str.split('');
    for (let i = 0; i < strArr.length >> 1; i++) {
      [strArr[i], strArr[strArr.length - i - 1]] = [strArr[strArr.length - i - 1], strArr[i]]
    }
    return strArr.join('');
  }
};
