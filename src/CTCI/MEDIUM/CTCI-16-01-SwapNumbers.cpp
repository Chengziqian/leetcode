//
// Created by ZiqianCheng on 2021/6/2.
//

// MEDIUM https://leetcode-cn.com/problems/swap-numbers-lcci/

/*
 * Write a function to swap a number in place (that is, without temporary variables).

Example:

Input: numbers = [1,2]
Output: [2,1]
Note:

numbers.length == 2
-2147483647 <= numbers[i] <= 2147483647
 */

#include <vector>
using namespace std;
class Solution {
public:
  vector<int> swapNumbers(vector<int>& numbers) {
    numbers[0] = numbers[0] ^ numbers[1];
    numbers[1] = numbers[0] ^ numbers[1];
    numbers[0] = numbers[0] ^ numbers[1];
    return numbers;
  }
};