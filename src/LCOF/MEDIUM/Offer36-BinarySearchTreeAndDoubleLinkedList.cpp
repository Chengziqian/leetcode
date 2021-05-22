// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

#include <stddef.h>
#include <utility>
using namespace std;
class Node {
public:
  int val;
  Node *left;
  Node *right;

  Node() {}

  Node(int _val) {
    val = _val;
    left = NULL;
    right = NULL;
  }

  Node(int _val, Node *_left, Node *_right) {
    val = _val;
    left = _left;
    right = _right;
  }
};
class Solution {
public:
  Node *treeToDoublyList(Node *root) {
    if (!root)
      return root;
    pair<Node *, Node *> list = help(root);
    list.first->left = list.second;
    list.second->right = list.first;
    return list.first;
  }
  pair<Node *, Node *> help(Node *root) {
    if (!root->left && !root->right)
      return make_pair(root, root);
    pair<Node *, Node *> L, R;
    if (root->left) {
      L = help(root->left);
      root->left = L.second;
      L.second->right = root;
    }
    if (root->right) {
      R = help(root->right);
      root->right = R.first;
      R.first->left = root;
    }
    return make_pair(L.first == NULL ? root : L.first,
                     R.second == NULL ? root : R.second);
  }
};