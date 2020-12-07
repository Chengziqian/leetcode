// 12/03/2020 EASY

// https://leetcode-cn.com/problems/count-primes/

/*
Count the number of prime numbers less than a non-negative number, n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106

 */

// function countPrimes(n: number): number {
//   let ans = 0;
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) ans++;
//   }
//   return ans;
//  
//   function isPrime(n: number) {
//     if (n < 2) return false;
//     for (let k = 2; k * k <= n; k++) {
//       if (n % k === 0) return false;
//     }
//     return true;
//   }
// };

// function countPrimes(n: number): number {
//   if (n < 2) return 0;
//   const isPrime = new Array(n).fill(true);
//   for (let i = 2; i * i <= n; i++) {
//     if (isPrime[i]) {
//       for (let k = 2; k * i < n; k++) {
//         isPrime[k * i] = false;
//       }
//     }
//   }
//   return isPrime.reduce((pre, cur) => cur ? pre + 1 : pre, 0) - 2;
// };

function countPrimes(n: number): number {
  const primes: number[] = [];
  const isPrime: boolean[] = new Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
    for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
      isPrime[i * primes[j]] = false;
      if (i % primes[j] === 0) break;
    }
  }
  return primes.length;
}; 
