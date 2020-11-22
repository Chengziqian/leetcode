// 11/21/2020 MEDIUM

// https://leetcode-cn.com/problems/sort-list/

/*

Given the head of a linked list, return the list after sorting it in ascending order.

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
// function sortList(head: ListNode | null): ListNode | null {
//   if (!head || !head.next) return head;
//   let fast: ListNode | null = head;
//   let slow: ListNode | null = head;
//   while(fast.next && fast.next.next) {
//     fast = fast.next.next;
//     slow = (slow as ListNode).next;
//   }
//   const nextHead = (slow as ListNode).next;
//   (slow as ListNode).next = null;
//   let first = sortList(head);
//   let second = sortList(nextHead);
//   const dummy = new ListNode();
//   let p = dummy;
//   while (first || second) {
//     if (first && second) {
//       if (first.val < second.val) {
//         p.next = first;
//         first = first.next;
//       } else {
//         p.next = second;
//         second = second.next;
//       }
//       p = p.next;
//     } else if (first) {
//       p.next = first;
//       break;
//     } else {
//       p.next = second;
//       break;
//     }
//   }
//   return dummy.next;
// };

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let length = 0, p: ListNode | null = head;
  while(p) {
    length++;
    p = p.next;
  }
  const dummy = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let pre = dummy, cur = dummy.next;
    while(cur) {
      const head1 = cur;
      for (let i = 1; i < subLength && cur.next; i++) cur = cur.next;
      const head2 = cur.next;
      cur.next = null;
      cur = head2;
      for (let i = 1; i < subLength && cur && cur.next; i++) cur = cur.next;
      let next = null;
      if (cur) {
        next = cur.next;
        cur.next = null;
      }
      pre.next = merge(head1, head2);
      while(pre.next) pre = pre.next;
      cur = next;
    }
  }

  return dummy.next;

  function merge(first: ListNode | null, second: ListNode | null): ListNode | null {
    if(!first) return second;
    if(!second) return first;
    const dummy = new ListNode();
    let p = dummy;
    while (first || second) {
      if (first && second) {
        if (first.val < second.val) {
          p.next = first;
          first = first.next;
        } else {
          p.next = second;
          second = second.next;
        }
        p = p.next;
      } else if (first) {
        p.next = first;
        break;
      } else {
        p.next = second;
        break;
      }
    }
    return dummy.next;
  }
}