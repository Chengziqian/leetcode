// 05/18/2021 EASY

// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/


#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* getKthFromEnd(ListNode* head, int k) {
      if (!head) return head;
      ListNode* t = head;
      ListNode* h = head;
      for (int i = 0; i < k - 1; i++) t = t->next;
      while(t->next) {
        h = h->next;
        t = t->next;
      }
      return h;
    }
};