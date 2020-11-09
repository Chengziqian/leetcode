// 09/28/2020 MEDIUM

// https://leetcode-cn.com/problems/reorder-list/

/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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

/**
 Do not return anything, modify head in-place instead.
 */
import { ListNode } from '../../types/index';

function reorderList(head: ListNode | null): void {
  if (!head) return;
  let slow: ListNode = head;
  let fast: ListNode | null = head;
  let preSlow: ListNode = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    preSlow = slow;
    slow = slow.next as ListNode;
  }
  preSlow.next = null;
  let pre = null;
  let cur: ListNode | null = slow;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  let curA: ListNode | null = head;
  let nextA: ListNode | null = curA && curA.next;
  let curB: ListNode | null = pre;
  let nextB: ListNode | null = curB && curB.next;
  let currentLast = null;
  while (curA && curB) {
    curA.next = curB;
    curA = nextA;
    nextA = nextA && nextA.next;
    curB.next = curA;
    currentLast = curB;
    curB = nextB;
    nextB = nextB && nextB.next;
  }
  if (currentLast) {
    if (curA) currentLast.next = curA;
    if (curB) currentLast.next = curB;
  }
};
