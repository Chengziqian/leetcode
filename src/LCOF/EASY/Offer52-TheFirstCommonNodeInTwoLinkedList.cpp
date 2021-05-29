//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/

#include <stddef.h>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    ListNode* p = headA, *q = headB;
    if (!p || !q) return NULL;
    while (p != q) {
      p = p->next;
      q = q->next;
      if (p == q && p == NULL) return NULL;
      if (!p) p = headB;
      if (!q) q = headA;
    }
    return p;
  }
};