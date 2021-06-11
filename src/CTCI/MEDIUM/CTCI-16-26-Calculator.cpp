//
// Created by ZiqianCheng on 2021/6/5.
//

// MEDIUM https://leetcode-cn.com/problems/calculator-lcci/

/*
 * Given an arithmetic equation consisting of positive integers, +, -, * and / (no paren­theses), compute the result.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
 */

#include <stack>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  int calculate(string s) {
    unordered_map<char, int> priority = {
      {'+', 0}, {'-', 0}, {'*', 1}, {'/', 1}
    };
    stack<char> ops;
    stack<int> nums;
    int curNum = 0;
    for (auto c: s) {
      if (c == ' ') continue;
      if (c >= '0' && c <= '9') {
        curNum = curNum * 10 + (c - '0');
      } else {
        nums.push(curNum);
        curNum = 0;
        while (!ops.empty() && priority[ops.top()] >= priority[c]) {
          calculate(nums, ops);
        }
        ops.push(c);
      }
    }
    nums.push(curNum);
    while (!ops.empty()) {
      calculate(nums, ops);
    }
    return nums.top();
  }

  void calculate(stack<int>& nums, stack<char>& ops) {
    int b = nums.top(); nums.pop();
    int a = nums.top(); nums.pop();
    char op = ops.top(); ops.pop();
    switch (op) {
      case '+':
        nums.push(a + b);
        return;
      case '-':
        nums.push(a - b);
        return;
      case '*':
        nums.push(a * b);
        return;
      case '/':
        nums.push(a / b);
        return;
      default:
        return;
    }
  }
};