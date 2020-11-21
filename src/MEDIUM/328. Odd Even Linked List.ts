// 11/13/2020 MEDIUM

// https://leetcode-cn.com/problems/odd-even-linked-list/

/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
 

Constraints:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
The length of the linked list is between [0, 10^4].

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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) return head;
  let oddPoint: ListNode | null = head, evenPoint: ListNode | null = head.next;
  let evenGroupHead = evenPoint;
  while (oddPoint && evenPoint) {
    oddPoint.next = evenPoint.next;
    if (!oddPoint.next) break;
    oddPoint = oddPoint.next;
    evenPoint.next = oddPoint ? oddPoint.next : null;
    evenPoint = evenPoint.next;
  }
  oddPoint.next = evenGroupHead;
  return head;
};
