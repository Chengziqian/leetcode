//
// Created by ZiqianCheng on 2021/7/5.
//

// HARD https://leetcode-cn.com/problems/number-of-atoms/

/*
 * Given a chemical formula (given as a string), return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together to produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

 

 

Example 1:

Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
Example 2:

Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:

Input: formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
        "K4N2O12O2S4"
Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
Example 4:

Input: formula = "Be32"
Output: "Be32"
 

Constraints:

1 <= formula.length <= 1000
formula consists of English letters, digits, '(', and ')'.
formula is always valid.
 */

#include <vector>
#include <unordered_map>
#include <string>
#include <stack>
using namespace std;
class Solution {
private:
  using P = pair<string, int>;
public:
  string countOfAtoms(string formula) {
    int n = formula.size();
    unordered_map<string, int> cur;
    stack<unordered_map<string, int>> s;
    string curAtom;
    int number = 0;
    int index = 0;
    while (index < n) {
      char c = formula[index];
      if (c >= 'A' && c <= 'Z') {
        if (curAtom.size()) cur[curAtom] += number == 0 ? 1 : number;
        curAtom = "";
        number = 0;
        curAtom.push_back(c);
      } else if (c >= 'a' && c <= 'z') {
        curAtom.push_back(c);
      } else if (c >= '0' && c <= '9') {
        number = number * 10 + (c - '0');
      } else if (c == '(') {
        if (curAtom.size()) cur[curAtom] += number == 0 ? 1 : number;
        curAtom = "";
        number = 0;
        s.push(cur);
        cur.clear();
      } else {
        if (curAtom.size()) cur[curAtom] += number == 0 ? 1 : number;
        curAtom = "";
        number = 0;
        index++;
        int groupCount = 0;
        while (index < n && formula[index] >= '0' && formula[index] <= '9') {
          groupCount = groupCount * 10 + (formula[index] - '0');
          index++;
        }
        for (auto &p: cur) {
          p.second *= (groupCount == 0 ? 1 : groupCount);
        }
        if (!s.empty()) {
          unordered_map<string, int> pre = s.top();
          s.pop();
          for (auto &p: pre) cur[p.first] += p.second;
        }
        continue;
      }
      index++;
    }
    if (curAtom.size()) cur[curAtom] += number == 0 ? 1 : number;
    vector<P> sorted;
    for (auto& p: cur) sorted.emplace_back(p);
    sort(sorted.begin(), sorted.end(), [](const P& a, const P& b) {
      return a.first < b.first;
    });
    string ans;
    for (auto& p: sorted) {
      ans = ans + p.first + (p.second > 1 ? to_string(p.second) : "");
    }
    return ans;
  }
};