//
// Created by ZiqianCheng on 2021/6/2.
//

// MEDIUM https://leetcode-cn.com/problems/words-frequency-lcci/

/*
 * Design a method to find the frequency of occurrences of any given word in a book.
 * What if we were running this algorithm multiple times?

You should implement following methods:

WordsFrequency(book) constructor, parameter is a array of strings, representing the book.
get(word) get the frequency of word in the book. 
Example:

WordsFrequency wordsFrequency = new WordsFrequency({"i", "have", "an", "apple", "he", "have", "a", "pen"});
wordsFrequency.get("you"); //returns 0，"you" is not in the book
wordsFrequency.get("have"); //returns 2，"have" occurs twice in the book
wordsFrequency.get("an"); //returns 1
wordsFrequency.get("apple"); //returns 1
wordsFrequency.get("pen"); //returns 1
Note:

There are only lowercase letters in book[i].
1 <= book.length <= 100000
1 <= book[i].length <= 10
get function will not be called more than 100000 times.
 */

#include <vector>
#include <string>
using namespace std;

struct TrieNode {
  TrieNode* children[26] = {nullptr};
  int count = 0;
};
class WordsFrequency {
private:
  TrieNode* root = new TrieNode();
public:
  WordsFrequency(vector<string>& book) {
    for (auto& word: book) insert(word);
  }

  int get(const string& word) {
    TrieNode* p = root;
    for (auto c: word) {
      if (!p->children[c - 'a']) return 0;
      p = p->children[c - 'a'];
    }
    return p->count;
  }

  void insert(const string& word) {
    TrieNode* p = root;
    for (auto c: word) {
      if (!p->children[c - 'a']) p->children[c - 'a'] = new TrieNode();
      p = p->children[c - 'a'];
    }
    p->count++;
  }
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * WordsFrequency* obj = new WordsFrequency(book);
 * int param_1 = obj->get(word);
 */

int main() {
  vector<string> t = {"i", "have", "an", "apple", "he", "have", "a", "pen"};
  auto *w = new WordsFrequency(t);
  return 0;
}