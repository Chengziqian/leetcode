//
// Created by ZiqianCheng on 2021/5/25.
//

// EASY https://leetcode-cn.com/problems/palindrome-linked-list-lcci/

/*
 * Implement a function to check if a linked list is a palindrome.

 

Example 1:

Input:  1->2
Output:  false
Example 2:

Input:  1->2->2->1
Output:  true
 

Follow up:
Could you do it in O(n) time and O(1) space?

 */

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  bool isPalindrome(ListNode* head) {
    if (!head || !head->next) return true;
    ListNode* fast = head, *slow = head;
    while (fast && fast->next && fast->next->next) {
      slow = slow->next;
      fast = fast->next->next;
    }
    ListNode* newHead = slow->next;
    slow->next = NULL;
    ListNode* pre = NULL, *cur = newHead;
    while (cur) {
      ListNode* tmp = cur->next;
      cur->next = pre;
      pre = cur;
      cur = tmp;
    }
    ListNode* right = pre;
    ListNode* left = head;
    while (left && right) {
      if (left->val != right->val) return false;
      left = left->next;
      right = right->next;
    }
    return true;
  }
};
