//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/

#include <string>
#include <vector>
#include <iostream>
using namespace std;
class Solution {
public:
  int strToInt(string str) {
    int index = 0;
    int n = str.size();
    bool isNegative = false;
    while(index < n && str[index] == ' ') index++;
    if ((str[index] >= '0' && str[index] <= '9') || (str[index] == '+' || str[index] == '-')) {
      if (str[index] == '+') {
        isNegative = false;
        index++;
      } else if (str[index] == '-') {
        isNegative = true;
        index++;
      }
      int ans = 0;
      for (int i = index; i < n; ++i) {
        if (str[i] < '0' || str[i] > '9') return isNegative ? -ans : ans;
        int cur = str[i] - '0';
        if (ans > INT_MAX / 10 || (ans == INT_MAX / 10 && cur > 7)) return isNegative ? INT_MIN : INT_MAX;
        ans = ans * 10 + cur;
      }
      return isNegative ? -ans : ans;
    }
    return 0;
  }
};

int main() {
  Solution s;
  cout << s.strToInt("-2147483648") << endl;
//  cout << s.strToInt("   -42") << endl;
//  cout << s.strToInt("4193 with words") << endl;
//  cout << s.strToInt("words and 987") << endl;
//  cout << s.strToInt("-91283472332") << endl;
//  cout << s.strToInt("91283472332") << endl;
//  cout << s.strToInt("2147483648") << endl;
//  cout << s.strToInt("2147483647") << endl;
//  cout << s.strToInt("  -0012a42") << endl;
  return 0;
}