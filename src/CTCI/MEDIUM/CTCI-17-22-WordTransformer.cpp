//
// Created by ZiqianCheng on 2021/6/11.
//

// MEDIUM https://leetcode-cn.com/problems/word-transformer-lcci/

/*
 * Given two words of equal length that are in a dictionary,
 * write a method to transform one word into another word by changing only one letter at a time.
 * The new word you get in each step must be in the dictionary.

Write code to return a possible transforming sequence.
If there is more than one sequence, return any of them.

Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
["hit","hot","dot","lot","log","cog"]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: endWord "cog" is not in the dictionary, so there's no possible transforming sequence.
 */

#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;
class Solution {
public:
  vector<string> findLadders(string beginWord, string endWord, vector<string>& wordList) {
    unordered_map<string, vector<string>> record;
    unordered_set<string> dic;
    for (auto str: wordList) {
      dic.insert(str);
      for (int i = 0; i < str.size(); ++i) {
        string key = str;
        key[i] = '_';
        record[key].push_back(str);
      }
    }
    if (!dic.count(beginWord) || !dic.count(endWord)) return {};
    queue<string> beginQueue, endQueue;
    unordered_map<string, string> beginPrePath, endPrePath;
    beginQueue.push(beginWord);
    endQueue.push(endWord);
    beginPrePath[beginWord] = "";
    endPrePath[endWord] = "";
    vector<string> ans;
    while (!beginQueue.empty() && !endQueue.empty()) {
      string curBegin = beginQueue.front();
      beginQueue.pop();
      string curEnd = endQueue.front();
      endQueue.pop();
      for (int i = 0; i < curBegin.size(); ++i) {
        string key = curBegin;
        key[i] = '_';
        for (auto next: record[key]) {
          if (!beginPrePath.count(next)) {
            beginPrePath[next] = curBegin;
            beginQueue.push(next);
          }
        }
      }
      for (int i = 0; i < curEnd.size(); ++i) {
        string key = curEnd;
        key[i] = '_';
        for (auto next: record[key]) {
          if (!endPrePath.count(next)) {
            endPrePath[next] = curEnd;
            endQueue.push(next);
          }
          if (beginPrePath.count(next)) {
            string path = next;
            while (!path.empty()) {
              ans.push_back(path);
              path = beginPrePath[path];
            }
            reverse(ans.begin(), ans.end());
            path = endPrePath[next];
            while (!path.empty()) {
              ans.push_back(path);
              path = endPrePath[path];
            }
            return ans;
          }
        }
      }
    }
    return {};
  }
};