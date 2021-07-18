//
// Created by 程子骞 on 2021/7/3.
//

// MEDIUM https://leetcode-cn.com/problems/sort-characters-by-frequency/

/*
 * Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of English letters and digits.
 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;
class Solution {
private:
  using P = pair<char, int>;
public:
  string frequencySort(string s) {
    unordered_map<char, int> count;
    for (auto c: s) count[c]++;
    vector<P> sorted;
    for (auto &p: count) sorted.emplace_back(p);
    sort(sorted.begin(), sorted.end(), [](const P &a, const P &b) {
      return a.second > b.second;
    });
    string ans;
    for (auto &p: sorted) {
      for (int i = 0; i < p.second; ++i) ans.push_back(p.first);
    }
    return ans;
  }
};