//
// Created by ZiqianCheng on 2021/5/26.
//

// MEDIUM https://leetcode-cn.com/problems/linked-list-cycle-lcci/

/*
 * Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node,
 so as to make a loop in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Example 3:

Input: head = [1], pos = -1
Output: no cycle
Follow Up:
Can you solve it without using additional space?

 */

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  ListNode *detectCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast != nullptr) {
      slow = slow->next;
      if (fast->next == nullptr) {
        return nullptr;
      }
      fast = fast->next->next;
      if (fast == slow) {
        ListNode *ptr = head;
        while (ptr != slow) {
          ptr = ptr->next;
          slow = slow->next;
        }
        return ptr;
      }
    }
    return nullptr;
  }
};