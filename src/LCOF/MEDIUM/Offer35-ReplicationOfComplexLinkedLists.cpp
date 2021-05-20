// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

#include <algorithm>
#include <unordered_map>
using namespace std;
class Node {
public:
  int val;
  Node *next;
  Node *random;

  Node(int _val) {
    val = _val;
    next = NULL;
    random = NULL;
  }
};
class Solution {
public:
  Node *copyRandomList(Node *head) {
    unordered_map<Node *, Node *> rc;
    Node *dummy = new Node(-1);
    Node *p = head;
    Node *c = dummy;
    while (p) {
      Node *copy = new Node(p->val);
      rc.insert(make_pair(p, copy));
      c->next = copy;
      p = p->next;
      c = c->next;
    }
    p = head;
    while (p) {
      Node *copy = rc[p];
      copy->random = rc[p->random];
      p = p->next;
    }
    return dummy->next;
  }
};