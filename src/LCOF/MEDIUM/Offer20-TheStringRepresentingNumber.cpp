// 05/18/2021 MEDIUM

// https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof

/*
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
 

示例 1：

输入：s = "0"
输出：true
示例 2：

输入：s = "e"
输出：false
示例 3：

输入：s = "."
输出：false
示例 4：

输入：s = "    .1  "
输出：true
 

提示：

1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。

*/
#include <string>
#include <iostream>
using namespace std;
class Solution {
public:
    bool isNumber(string s) {
      int n = s.size();
      int ePos = -1;
      int start = 0, end = s.size() - 1;
      while(start <= end && s[start] == ' ') start++;
      while(start <= end && s[end] == ' ') end--;
      if (start > end) return false;
      for (int i = start; i <= end; ++i) {
        if (s[i] == ' ') return false;
        if (s[i] == 'e' || s[i] == 'E') {
          if (ePos != -1) return false;
          else ePos = i;
        }
      }
      if (ePos != -1) {
        string front = s.substr(0, ePos);
        string behind = s.substr(ePos + 1);
        return (isInterger(front) || isDecimal(front)) && isInterger(behind);
      } else {
        return isInterger(s) || isDecimal(s);
      }
      return true;
    }
    bool isInterger(string s) {
      int start = 0, end = s.size() - 1;
      while(start <= end && s[start] == ' ') start++;
      while(start <= end && s[end] == ' ') end--;
      if (start > end) return false;
      if (start == end && (s[start] == '+' || s[start] == '-')) return false;
      for (int i = start; i <= end; ++i) {
        if (s[i] >= '0' && s[i] <= '9') continue;
        else if ((s[i] == '+' || s[i] == '-') && i == start) continue;
        else return false;
      }
      return true;
    }

    bool isDecimal(string s) {
      int start = 0, end = s.size() - 1;
      while(start <= end && s[start] == ' ') start++;
      while(start <= end && s[end] == ' ') end--;
      if (start > end) return false;
      int point = 0;
      if (start == end && (s[start] == '.' || s[start] == '+' || s[start] == '-')) return false;
      for (int i = start; i <= end; ++i) {
        if (s[i] >= '0' && s[i] <= '9') continue;
        else if ((s[i] == '+' || s[i] == '-') && i == start) continue;
        else if (s[i] == '.' && point++ == 0) {
          if (i > start && s[i - 1] >= '0' && s[i - 1] <= '9' || i < end && s[i + 1] >= '0' && s[i + 1] <= '9' ) continue;
          else return false;
        } else return false;
      }
      return true;
    }
};

int main() {
  Solution s;
  // cout << s.isNumber("+100") << endl;
  // cout << s.isNumber("5e2") << endl;
  // cout << s.isNumber("-123") << endl;
  // cout << s.isNumber("3.1416") << endl;
  // cout << s.isNumber("-1E-16") << endl;
  // cout << s.isNumber("0123") << endl;
  // cout << s.isNumber(" -54.53061") << endl;
  cout << s.isNumber("-.") << endl;
  return 0;
}