// 01/03/2021 MEDIUM


// https://leetcode-cn.com/problems/partition-list/

/* 
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

*/

import { ListNode } from '../../types/index';

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return head;
  const dummy: ListNode = new ListNode();
  let last = dummy, divide = dummy;
  let p = head;
  while (p) {
    if (p.val < x) {
      const next = p.next;
      p.next = divide.next;
      divide.next = p;
      if (last === divide) last = divide.next;
      divide = divide.next;
      p = next;
    } else {
      last.next = p;
      last = last.next;
      p = p.next;
    }
  }
  last.next = null;
  return dummy.next;
};