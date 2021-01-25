import { ListNode } from '../../../types/index'

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head
  let p = head;
  let q = head;
  for (let i = 0; i < k - 1; i++) q = q.next;
  const left = q;
  while(q.next) {
    p = p.next;
    q = q.next;
  }
  const right = p;
  [left.val, right.val] = [right.val, left.val]
  return head;
};