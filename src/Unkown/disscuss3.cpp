//
// Created by ZiqianCheng on 2021/5/29.
//


#include <vector>
#include <string>
using namespace std;

struct TrieNode {
  TrieNode* children[10];
  bool tail;
  TrieNode(): tail(false) {};
};
struct TreeNode {
  string value;
  TreeNode* child[10];
};
class Solution {
private:
  TrieNode* tireTree = new TrieNode();
public:
  TreeNode* buildTree(vector<int>& nums) {
    for (auto n: nums) insert(to_string(n));

  }

  void insert(string&& str) {
    TrieNode* p = tireTree;
    for (auto c: str) {
      if (!p->children[c - '0']) p->children[c - '0'] = new TrieNode();
      p = p->children[c - '0'];
    }
    p->tail = true;
  }

  void mergeTree(TrieNode* trieNode, char current, string& prefix) {
    TreeNode* node;
    if (trieNode->tail) {
      node = new TrieNode
    }
  }
};