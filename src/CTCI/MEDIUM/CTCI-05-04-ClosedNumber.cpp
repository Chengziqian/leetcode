//
// Created by ZiqianCheng on 2021/5/28.
//

// MEDIUM https://leetcode-cn.com/problems/closed-number-lcci/

/*
 * Given a positive integer,
 * print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.

Example1:

 Input: num = 2 (0b10)
 Output: [4, 1] ([0b100, 0b1])
Example2:

 Input: num = 1
 Output: [2, -1]
Note:

1 <= num <= 2147483647
If there is no next smallest or next largest number, output -1.

 */
#include <vector>
using namespace std;
class Solution {
public:
  vector<int> findClosedNumbers(int num) {
    if (num <= 0 || num >= INT_MAX) {
      return {-1, -1};
    } else {
      return {getNext(num), getPrev(num)};
    }
  }

  int getNext(int num) {
    int count1 = 0;
    int count0 = 0;
    int tmp = num;
    while (!(tmp & 1) && tmp) {
      count0++;
      tmp >>= 1;
    }
    while (tmp & 1) {
      count1++;
      tmp >>= 1;
    }
    int p = count1 + count0;
    if (p == 31 || p == 0) {
      return -1;
    }
    num |= (1 << p);
    num &= ~((1 << p) - 1);
    num |= (1 << (count1 - 1)) - 1;
    return num;
  }

  int getPrev(int num) {
    int count1 = 0, count0 = 0;
    int tmp = num;
    while (tmp & 1) {
      count1++;
      tmp >>= 1;
    }
    if (!tmp) return -1;
    while (!(tmp & 1) && tmp) {
      count0++;
      tmp >>= 1;
    }
    int p = count1 + count0;
    num &= ~((1 << (p + 1)) - 1);
    num |= ((1 << (count1 + 1)) - 1) << (count0 - 1);
    return num;
  }
};