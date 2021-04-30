// 04/30/2021 EASY

// https://leetcode-cn.com/problems/insert-into-bits-lcci

/*
You are given two 32-bit numbers, 
N and M, and two bit positions, 
i and j. 
Write a method to insert M into N such that M starts at bit j and ends at bit i. 
You can assume that the bits j through i have enough space to fit all of M. 
That is, if M = 10011,
 you can assume that there are at least 5 bits between j and i. 
 You would not, for example, 
 have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.

Example1:

 Input: N = 10000000000, M = 10011, i = 2, j = 6
 Output: N = 10001001100
Example2:

 Input:  N = 0, M = 11111, i = 0, j = 4
 Output: N = 11111
 */

function insertBits(N: number, M: number, i: number, j: number): number {
  let ans = 0;
  for (let k = 0; k < 32; k++) {
    if (k >= i && k <= j) ans |= (M & (1 << (k - i))) << i;
    else ans |= N & (1 << k);
  }
  return ans;
};
