//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/palindrome-permutation-lcci/

/*
 * Given a string,
 * write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.

 

Example1:

Input: "tactcoa"
Output: true（permutations: "tacocat"、"atcocta", etc.）

 */

#include <string>
#include <unordered_map>
using namespace std;
class Solution {
public:
  bool canPermutePalindrome(string s) {
    int n = s.size();
    unordered_map<int, int> count;
    for (auto c: s) count[c]++;
    int oddCount = 0;
    for (auto p: count) {
      if (p.second & 1) oddCount++;
    }
    return n & 1 ? oddCount <= 1 : oddCount == 0;
  }
};