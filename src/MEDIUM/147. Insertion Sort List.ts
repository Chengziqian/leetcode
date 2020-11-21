// 11/20/2020 MEDIUM

// https://leetcode-cn.com/problems/insertion-sort-list/

/*
Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

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

// function insertionSortList(head: ListNode | null): ListNode | null {
//   const dummy = new ListNode();
//   dummy.next = head;
//   let current: ListNode | null = head;
//   while (current) {
//     let start: ListNode = dummy;
//     while (start.next && start.next.val < current.val) start = start.next;
//     const originNext: ListNode | null = start.next;
//     start.next = current;
//     const nextNode = current.next;
//     current.next = originNext;
//     let pre: ListNode = current;
//     while (pre.next && pre.next !== current) pre = pre.next;
//     pre.next = nextNode;
//     current = pre.next;
//   }
//   return dummy.next;
// };

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let lastSorted = head;
  let current: ListNode | null = head.next;
  while (current) {
    if (lastSorted.next && lastSorted.val <= current.val) {
      lastSorted = lastSorted.next;
    } else {
      let pre = dummy;
      while (pre.next && pre.next.val <= current.val) pre = pre.next;
      lastSorted.next = current.next;
      current.next = pre.next;
      pre.next = current;
    }
    current = lastSorted.next;
  }
  return dummy.next;
};
