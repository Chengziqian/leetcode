//
// Created by ZiqianCheng on 2021/6/7.
//

// MEDIUM https://leetcode-cn.com/problems/re-space-lcci

/*
 * Oh, no! You have accidentally removed all spaces, punctuation, and capitalization in a lengthy document.
 * A sentence like "I reset the computer. It still didn't boot!" became "iresetthecomputeritstilldidntboot''.
 * You'll deal with the punctuation and capitalization later; right now you need to re-insert the spaces.
 * Most of the words are in a dictionary but a few are not.
 * Given a dictionary (a list of strings) and the document (a string),
 * design an algorithm to unconcatenate the document in a way that minimizes the number of unrecognized characters.
 * Return the number of unrecognized characters.

Note: This problem is slightly different from the original one in the book.

 

Example:

Input:
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
Output:  7
Explanation:  After unconcatenating, we got "jess looked just like tim her brother",
 which containing 7 unrecognized characters.
Note:

0 <= len(sentence) <= 1000
The total number of characters in dictionary is less than or equal to 150000.
There are only lowercase letters in dictionary and sentence.

 */

#include <vector>
#include <unordered_set>
#include <string>
using namespace std;
struct TrieNode {
  bool isKey = false;
  TrieNode* children[26] = {nullptr};
};
class Solution {
private:
  TrieNode* trieTree = new TrieNode();
public:
  int respace(vector<string>& dictionary, string sentence) {
    int n = sentence.size();
    if (!n) return 0;
    for (auto word: dictionary) insert(word);
    vector<int> dp(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
      dp[i] = dp[i - 1] + 1;
      TrieNode* p = trieTree;
      for (int j = i; j >= 1; --j) {
        int index = sentence[j - 1] - 'a';
        if (!p->children[index]) {
          break;
        } else if (p->children[index]->isKey) {
          dp[i] = min(dp[i], dp[j - 1]);
        }
        p = p->children[index];
      }
    }
    return dp[n];
  }

  void insert(const string& str) {
    TrieNode* p = trieTree;
    for (int i = str.size() - 1; i >= 0; --i) {
      int index = str[i] - 'a';
      if (!p->children[index]) {
        p->children[index] = new TrieNode();
      }
      p = p->children[index];
    }
    p->isKey = true;
  }
};