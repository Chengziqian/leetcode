// 09/24/2020 EASY

// https://leetcode-cn.com/problems/perfect-number/

/**
 * We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

 Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
 Example:
 Input: 28
 Output: True
 Explanation: 28 = 1 + 2 + 4 + 7 + 14
 Note: The input number n will not exceed 100,000,000. (1e8)
 
 * 
 */
function checkPerfectNumber(num: number): boolean {
  if (num < 2) return false;
  let start = 2;
  let last = 0;
  let sum = 0;
  while (num % start !== 0) start++;
  for (let i = start; i <= num / start; i++) {
    if (i === last) break;
    if (num % i === 0) {
      sum += i;
      sum += num / i;
      last = num / i;
    }
  }
  return sum + 1 === num;
};
