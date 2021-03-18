// 03/18/2021 MEDIUM

// https://leetcode-cn.com/problems/reverse-linked-list-ii/

/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

 */
import { ListNode } from '../../types/index';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left >= right || !head) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let start = head;
  let preStart = dummy;
  let count = right - left;
  let preCount = left - 1;
  while (preCount--) {
    preStart = start;
    start = start.next;
  }
  let pre = start;
  let cur = start.next;
  while (count--) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  start.next = cur;
  preStart.next = pre;
  return dummy.next;
};
