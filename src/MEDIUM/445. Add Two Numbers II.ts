// 12/11/2020 MEDIUM

// https://leetcode-cn.com/problems/add-two-numbers-ii/

/*

You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7


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

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   let len1 = 0, len2 = 0;
//   let p1: ListNode | null = l1, p2: ListNode | null = l2;
//   while (p1) {
//     len1++;
//     p1 = p1.next;
//   }
//   while (p2) {
//     len2++;
//     p2 = p2.next;
//   }
//   let zeroCount = Math.abs(len1 - len2);
//   let last: ListNode | null = null;
//   const c = add(l1, l2, zeroCount);
//   if (c > 0) {
//     const ans = new ListNode(c);
//     ans.next = last;
//     return ans;
//   }
//   return last
//   function add(l1: ListNode | null, l2: ListNode | null, zeroCount: number): number {
//     if (!l1 && !l2) return 0;
//     let sum;
//     if (zeroCount) {
//       if (len1 > len2) {
//         sum = (l1 as ListNode).val + add((l1 as ListNode).next, l2, zeroCount - 1);
//       } else {
//         sum = (l2 as ListNode).val + add(l1, (l2 as ListNode).next, zeroCount - 1);
//       }
//     } else {
//       sum = (l1 as ListNode).val + (l2 as ListNode).val + add((l1 as ListNode).next, (l2 as ListNode).next, zeroCount);
//     }
//     const curNode = new ListNode(sum % 10);
//     curNode.next = last;
//     last = curNode;
//     return Math.floor(sum / 10);
//   }
// };

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  let stack1: number[] = [], stack2: number[] = [];
  let p1: ListNode | null = l1, p2: ListNode | null = l2;
  while (p1) {
    stack1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    stack2.push(p2.val);
    p2 = p2.next;
  }
  let last: ListNode | null = null;
  let carry: number = 0;
  while (stack1.length || stack2.length || carry > 0) {
    const cur1 = stack1.length ? stack1.pop() : 0
    const cur2 = stack2.length ? stack2.pop() : 0
    const sum = cur1 + cur2 + carry;
    const res = new ListNode(sum % 10);
    res.next = last;
    last = res;
    carry = Math.floor(sum / 10);
  }
  return last;
};
