// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head?.next;
  let prevVal = head?.val;
  let prev = head;
  while (node) {
    if (prevVal === node.val && prev) {
      prev.next = node.next;
    } else {
      prev = node;
    }
    prevVal = node.val;
    node = node.next;
  }
  return head;
}

export default deleteDuplicates;
