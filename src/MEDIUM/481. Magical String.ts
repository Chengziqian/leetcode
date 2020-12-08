// 12/08/2020 MEDIUN

// https://leetcode-cn.com/problems/magical-string/

/*
A magical string S consists of only '1' and '2' and obeys the following rules:

The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself.

The first few elements of string S is the following: S = "1221121221221121122……"

If we group the consecutive '1's and '2's in S, it will be:

1 22 11 2 1 22 1 22 11 2 11 22 ......

and the occurrences of '1's or '2's in each group are:

1 2 2 1 1 2 1 2 2 1 2 2 ......

You can see that the occurrence sequence above is the S itself.

Given an integer N as input, return the number of '1's in the first N number in the magical string S.

Note: N will not exceed 100,000.

Example 1:
Input: 6
Output: 3
Explanation: The first 6 elements of magical string S is "12211" and it contains three 1's, so return 3.

 */

function magicalString(n: number): number {
  if (n === 0) return 0;
  let countPointer = 2;
  let s = "122";
  let oneCount = 1;
  while (s.length < n) {
    if (s[countPointer] === '1') {
      if (s[s.length - 1] === '1') s = s + '2';
      else {
        s += '1';
        oneCount++;
      }
    } else {
      if (s[s.length - 1] === '1') s += '22';
      else {
        s += '11';
        if (s.length > n) {
          oneCount++;
        } else {
          oneCount += 2;
        }
      }
    }
    countPointer++;
  }
  return oneCount;
};
