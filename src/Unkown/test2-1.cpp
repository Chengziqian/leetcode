//
// Created by ZiqianCheng on 2021/6/11.
//


/*
 * 四则运算表达式解析
详细描述
设计一个算法，实现简单四则运算表达式的解析，规则如下：

1、表达式只包含正整数，且不会出现"+1"或者"-1"的语法

2、只支持加减乘除4个运算符号

3、计算结果返回字符串，解析失败返回字符串"Syntax Error"

其他
时间限制: 1000ms

内存限制: 256.0MB

输入输出示例
示例1
输入
复制
"1+5-2"
输出
复制
"4"
示例2
输入
复制
"1+5*3-4/2"
输出
复制
"14"
示例3
输入
复制
"1++1"
输出
复制
"Syntax Error"
 */

#include <string>
#include <stack>
#include <unordered_map>
using namespace std;
class Solution {
public:
  /**
   * Note: 类名、方法名、参数名已经指定，请勿修改
   *
   *
   *
   * @param exp string字符串
   * @return string字符串
   */
  string parseExpression(string exp) {
    stack<char> ops;
    stack<int> nums;
    unordered_map<char, int> priority = {
      {'+', 0},
      {'-', 0},
      {'*', 1},
      {'/', 1},
    };
    int curNum = 0;
    for (int i = 0; i < exp.size(); ++i) {
      char c = exp[i];
      if (c == ' ') continue;
      if (c >= '0' && c <= '9') {
        curNum = curNum * 10 + (c - '0');
      } else if (c == '+' || c == '-' || c == '*' || c == '/') {
        if (i == 0 || i == exp.size() - 1 || ((exp[i - 1] < '0' || exp[i - 1] > '9') && exp[i - 1] != ' ')) return "Syntax Error";
        nums.push(curNum);
        curNum = 0;
        while (!ops.empty() && priority[ops.top()] > priority[c]) {
          calculate(ops, nums);
        }
        ops.push(c);
      } else {
        return "Syntax Error";
      }
    }
    nums.push(curNum);
    while(!ops.empty()) {
      calculate(ops, nums);
    }
    return to_string(nums.top());
  }

  void calculate(stack<char>& ops, stack<int>& nums) {
    char op = ops.top(); ops.pop();
    int b = nums.top(); nums.pop();
    int a = nums.top(); nums.pop();
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

int main() {
  Solution s;
  s.parseExpression("1+5-2");
  return 0;
}
