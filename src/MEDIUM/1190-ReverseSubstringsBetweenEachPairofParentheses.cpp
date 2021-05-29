//
// Created by ZiqianCheng on 2021/5/26.
//

// MEDIUM https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/

/*
 * You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
Example 4:

Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"
 

Constraints:

0 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It's guaranteed that all parentheses are balanced.

 */

#include <stack>
#include <string>
using namespace std;

class Solution {
public:
//  string reverseParentheses(string s) {
//    string cur = "";
//    stack<string> myStack;
//    for (auto c: s) {
//      if (c == '(') {
//        myStack.push(cur);
//        cur = "";
//      } else if (c == ')') {
//        reverse(cur.begin(), cur.end());
//        cur = myStack.top() + cur;
//        myStack.pop();
//      } else {
//        cur += c;
//      }
//    }
//    return cur;
//  }
  string reverseParentheses(string s) {
    int n = s.size();
    stack<int> indexStack;
    vector<int> pair(n);
    for (int i = 0; i < n; ++i) {
      if (s[i] == '(') {
        indexStack.push(i);
      } else if (s[i] == ')') {
        int index = indexStack.top();
        indexStack.pop();
        pair[i] = index;
        pair[index] = i;
      }
    }
    string ans = "";
    int index = 0;
    int step = 1;
    while (index < n) {
      if (s[index] == '(' || s[index] == ')') {
        index = pair[index];
        step = -step;
      } else {
        ans.push_back(s[index]);
      }
      index += step;
    }
    return ans;
  }
};