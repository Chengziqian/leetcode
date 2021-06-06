//
// Created by ZiqianCheng on 2021/6/2.
//

// HARD https://leetcode-cn.com/problems/english-int-lcci/

/*
 * Given any integer, print an English phrase that describes the integer (e.g., "One Thousand Two Hundred Thirty Four").

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

 */

#include <string>
#include <vector>
#include <iostream>
using namespace std;
class Solution {
private:
  int number[32] = {
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30,
      40, 50, 60, 70, 80, 90, 100, 1000, 1000000, 1000000000
  };
  string numStr[32] = {
      "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen", "Nineteen",
      "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred", "Thousand",
      "Million", "Billion"
  };
public:
  string numberToWords(int num) {
    if (num == 0) return "Zero";
    int index = 31;
    while(index >= 0 && num < number[index]) index--;
    string res;
    if (number[index] <= 90) {
      res += numStr[index];
    } else {
      res += numberToWords(num / number[index]) + " " + numStr[index];
    }
    if (num % number[index]) res += " " + numberToWords(num % number[index]);
    return res;
  }
};

int main() {
  Solution s;
  cout << s.numberToWords(1000) << endl;
  cout << s.numberToWords(123) << endl;
  cout << s.numberToWords(100) << endl;
  cout << s.numberToWords(2000) << endl;
  cout << s.numberToWords(9999099) << endl;
  cout << s.numberToWords(12345) << endl;
  cout << s.numberToWords(1234567) << endl;
  cout << s.numberToWords(1234567891) << endl;
  return 0;
}