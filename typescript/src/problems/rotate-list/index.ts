// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let newHead = head,
    prev = head,
    node = head,
    node2 = head;
  let length = 0;

  // Find length and last node
  while (node?.next) {
    length++;
    node = node.next;
  }
  length++;

  // if 1 or n then no need to rotate
  if (length === 1 || length === k || k == 0) return head;

  // find new Last node
  let n = length - (k % length) - 1;
  while (n > 0 && node2) {
    n--;
    console.log(node2.val);
    node2 = node2.next;
  }

  prev = node2;
  newHead = node2?.next || head;

  if (node) node.next = head;
  if (prev) prev.next = null;
  return newHead;
}
