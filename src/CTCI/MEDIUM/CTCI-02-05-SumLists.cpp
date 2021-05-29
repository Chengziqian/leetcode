//
// Created by ZiqianCheng on 2021/5/25.
//

// MEDIUM https://leetcode-cn.com/problems/sum-lists-lcci/

/*
 * You have two numbers represented by a linked list,
 * where each node contains a single digit.
 * The digits are stored in reverse order,
 * such that the 1's digit is at the head of the list.
 * Write a function that adds the two numbers and returns the sum as a linked list.

 

Example:

Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.
Follow Up: Suppose the digits are stored in forward order. Repeat the above problem.

Example:

Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is, 912.

 */

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    int c = 0;
    ListNode* p = l1, *q = l2;
    ListNode* dummy = new ListNode();
    ListNode* cur = dummy;
    while (p || q || c) {
      int val = (p ? p->val : 0) + (q ? q->val : 0) + c;
      cur->next = new ListNode(val % 10);
      c = val / 10;
      p = p ? p->next : NULL;
      q = q ? q->next : NULL;
      cur = cur->next;
    }
    return dummy->next;
  }
};