// 05/18/2021 EASY

// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/


#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* deleteNode(ListNode* head, int val) {
      if (!head) return head;
      ListNode* dummy = new ListNode(-1);
      dummy->next = head;
      ListNode* pre = dummy;
      ListNode* cur = dummy->next;
      while (cur && cur->val != val) {
        pre = cur;
        cur = cur->next;
      }
      pre->next = cur->next;
      cur->next = NULL;
      return dummy->next;
    }
};