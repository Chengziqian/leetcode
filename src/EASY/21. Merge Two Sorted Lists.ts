// 8/26/2020 EASY
import { ListNode } from './types'
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let p = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  if (!l1) p.next = l2;
  if (!l2) p.next = l1;
  return dummy.next;
};
