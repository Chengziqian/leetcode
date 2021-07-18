//
// Created by ZiqianCheng on 2021/7/8.
//

// MEDIUM https://leetcode-cn.com/problems/sort-list/

/*
 * Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105

 */


struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};
class Solution {
public:
  ListNode* sortList(ListNode* head) {
    if (!head || !head->next) return head;
    ListNode *fast = head, *slow = head;
    while (fast && fast->next && fast->next->next) {
      fast = fast->next->next;
      slow = slow->next;
    }
    ListNode* headA = head, *headB = slow->next;
    slow->next = nullptr;
    ListNode* sortedA = sortList(headA);
    ListNode* sortedB = sortList(headB);
    ListNode* dummy = new ListNode();
    ListNode* p = dummy;
    while (sortedA || sortedB) {
      if (!sortedA) {
        p->next = sortedB;
        break;
      }
      if (!sortedB) {
        p->next = sortedA;
        break;
      }
      if (sortedA->val < sortedB->val) {
        p->next = sortedA;
        sortedA = sortedA->next;
      } else {
        p->next = sortedB;
        sortedB = sortedB->next;
      }
      p = p->next;
    }
    return dummy->next;
  }
};