//
// Created by ZiqianCheng on 2021/6/15.
//

// HARD https://leetcode-cn.com/problems/sparse-similarity-lcci/

/*
 *The similarity of two documents (each with distinct words) is defined to be the size of the intersection divided by the size of the union.
 * For example, if the documents consist of integers, the similarity of {1, 5, 3} and {1, 7, 2, 3} is 0.4,
 * because the intersection has size 2 and the union has size 5.
 * We have a long list of documents (with distinct values and each with an associated ID) where the similarity is believed to be "sparse".
 * That is, any two arbitrarily selected documents are very likely to have similarity 0. Design an algorithm that returns a list of pairs of document IDs and the associated similarity.

Input is a 2D array docs, where docs[i] is the document with id i.
Return an array of strings, where each string represents a pair of documents with similarity greater than 0.
The string should be formatted as {id1},{id2}: {similarity}, where id1 is the smaller id in the two documents, and similarity is the similarity rounded to four decimal places.
You can return the array in any order.

Example:

Input:
[
  [14, 15, 100, 9, 3],
  [32, 1, 9, 3, 5],
  [15, 29, 2, 6, 8, 7],
  [7, 10]
]
Output:
[
  "0,1: 0.2500",
  "0,2: 0.1000",
  "2,3: 0.1429"
]
Note:

docs.length <= 500
docs[i].length <= 500
The number of document pairs with similarity greater than 0 will not exceed 1000.
 */

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <string>
#include <iomanip>
#include <sstream>
#include <iostream>
using namespace std;
class Solution {
public:
  vector<string> computeSimilarities(vector<vector<int>>& docs) {
    unordered_map<int, vector<int>> record;
    int n = docs.size();
    for (int i = 0; i < n; ++i) {
      for (auto num: docs[i]) record[num].push_back(i);
    }
    unordered_map<int, unordered_map<int, int>> unionCount;
    vector<string> ans;
    for (auto& p: record) {
      int size = p.second.size();
      for (int i = 0; i < size; ++i) {
        for (int j = i + 1; j < size; ++j) {
          unionCount[p.second[i]][p.second[j]]++;
        }
      }
    }
    char ansString[256];
    for (auto& doc1: unionCount) {
      for (auto& doc2: unionCount[doc1.first]) {
        int i = doc1.first, j = doc2.first;
        int count = doc2.second;
        double similarity = (double)count / (docs[i].size() + docs[j].size() - count);
        sprintf(ansString, "%d,%d: %.4lf", i, j, similarity + 1e-9);
        ans.emplace_back(ansString);
      }
    }
    return ans;
  }
};

#define FUNC(name, TYPE) TYPE INVOKE__##name(TYPE args)
#define WRAPPER(NAME) FUNC(NAME, string)
WRAPPER(Runtime_IsArray) {
  return args;
}
int main() {
  string a = INVOKE__Runtime_IsArray("aa");
  cout << a << endl;
  return 0;
}