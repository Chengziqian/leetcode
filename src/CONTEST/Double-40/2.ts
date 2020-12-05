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
import { ListNode } from '../../../types/index'
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  if (!list1) return list1
  let left: ListNode | null = list1;
  let right: ListNode | null = list1;
  let preCount = a - 1;
  let afterCount = b + 1
  while(preCount-- && left) left = left.next;
  while(afterCount-- && right) right = right.next;
  if (list2) {
    (left as ListNode).next = list2;
    let last = list2;
    while(last && last.next) last = last.next;
    last.next = right;
  } else {
    (left as ListNode).next = right;
  }
  return list1;
};