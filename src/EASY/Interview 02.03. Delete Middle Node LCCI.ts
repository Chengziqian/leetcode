// 11/02/2020 MEDIUM

// https://leetcode-cn.com/problems/delete-middle-node-lcci/


/*

Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

 

Example:

Input: the node c from the linked list a->b->c->d->e->f
Output: nothing is returned, but the new linked list looks like a->b->d->e->f

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import { ListNode } from '../../types/index';

function deleteNode (node: ListNode) {
  let cur = node;
  let pre = cur;
  while (cur.next) {
    cur.val = cur.next.val;
    pre = cur;
    cur = cur.next;
  }
  pre.next = null;
};
