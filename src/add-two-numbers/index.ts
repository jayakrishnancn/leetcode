// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode | null = null;
  let carry = 0,
    prev: ListNode | null = null;
  while (l1 || l2) {
    let val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    carry = val > 9 ? 1 : 0;
    let node = new ListNode(val % 10);
    if (!head) {
      head = node;
      prev = node;
    } else if (prev) {
      prev.next = node;
      prev = prev.next;
    }
  }
  if (carry) {
    let node = new ListNode(1);
    if (!head) {
      head = node;
      prev = node;
    } else if (prev) {
      prev.next = node;
      prev = prev.next;
    }
  }

  return head;
}

export default addTwoNumbers;
