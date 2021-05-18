// 05/18/2021 EASY

// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/


#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
      ListNode* dummy = new ListNode(-1);
      ListNode* p = dummy;
      while (l1 || l2) {
        if (!l1) {
          p->next = l2;
          break;
        }
        if (!l2) {
          p->next = l1;
          break;
        }
        if (l1->val < l2->val) {
          p->next = l1;
          l1 = l1->next;
        } else {
          p->next = l2;
          l2 = l2->next;
        }
        p = p->next;
      }
      return dummy->next;
    }
};