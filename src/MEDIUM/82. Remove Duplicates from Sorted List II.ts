// 03/25/2021 MEDOUM

// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from '../../types/index';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  let cur = head;
  while (cur) {
    if (cur.next && cur.next.val === cur.val) {
      let last = cur;
      while (last.next && last.next.val === last.val) last = last.next;
      pre.next = last.next;
      cur = pre.next;
      if (!cur) break;
      continue;
    }
    pre = cur;
    cur = cur.next;
  }
  return dummy.next;
};
