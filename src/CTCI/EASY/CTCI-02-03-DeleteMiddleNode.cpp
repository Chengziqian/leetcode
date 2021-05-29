//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://leetcode-cn.com/problems/delete-middle-node-lcci/

/*
 * Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

 

Example:

Input: the node c from the linked list a->b->c->d->e->f
Output: nothing is returned, but the new linked list looks like a->b->d->e->f
 */

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
  void deleteNode(ListNode* node) {
    ListNode* cur = node;
    ListNode* pre = NULL;
    while (cur->next) {
      cur->val = cur->next->val;
      pre = cur;
      cur = cur->next;
    }
    pre->next = NULL;
  }
};