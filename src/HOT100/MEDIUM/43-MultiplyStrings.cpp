//
// Created by ZiqianCheng on 2021/6/22.
//

// MEDIUM https://leetcode-cn.com/problems/multiply-strings/

/*
 * Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  string multiply(string num1, string num2) {
    int m = num1.size(), n = num2.size();
    vector<int> num(m + n, 0);
    for (int i = m - 1; i >= 0; --i) {
      for (int j = n - 1; j >= 0; --j) {
        int sum = num[i + j + 1] + (num1[i] - '0') * (num2[j] - '0');
        num[i + j + 1] = sum % 10;
        num[i + j] += sum / 10;
      }
    }
    int index = 0;
    while (index < num.size() && num[index] == 0) index++;
    if (index == num.size()) return "0";
    string ans;
    for (int i = index; i < num.size(); ++i) {
      ans.push_back(num[i] + '0');
    }
    return ans;
  }
};