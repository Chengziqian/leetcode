// 05/18/2021 EASY

// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
      if (!head) return head;
      ListNode* pre = NULL;
      ListNode* cur = head;
      while(cur) {
        ListNode* tmp = cur->next;
        cur->next = pre;
        pre = cur;
        cur = tmp;
      }
      return pre;
    }
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
      if (!head || !head->next) return head;
      ListNode* next = reverseList(head->next);
      head->next->next = head;
      head->next = NULL;
      return next;
    }
};