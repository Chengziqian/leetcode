//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/

/*
 * Implement an algorithm to find the kth to last element of a singly linked list. Return the value of the element.

Note: This problem is slightly different from the original one in the book.

Example:

Input:  1->2->3->4->5 和 k = 2
Output:  4
Note:

k is always valid.

 */

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  int kthToLast(ListNode* head, int k) {
    if (!head) return -1;
    ListNode* last = head;
    while (k--) last = last->next;
    ListNode* ans = head;
    while (last) {
      ans = ans->next;
      last = last->next;
    }
    return ans->val;
  }
};