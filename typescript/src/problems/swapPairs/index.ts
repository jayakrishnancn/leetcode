// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function swapPairs(head: ListNode | null): ListNode | null {
  let node1 = head,
    node2 = head?.next,
    prev = head,
    newHead = node2;

  while (node2 && prev && node1) {
    prev.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    prev = node1;
    node1 = node1?.next ?? null;
    node2 = node1?.next ?? null;
  }

  return newHead ?? head;
}
