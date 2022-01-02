// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1?.val) return list2;
  if (!list2?.val) return list1;
  let head = new ListNode(
    list1?.val < list2?.val ? list1?.val : list2?.val
  );
  if (list1?.val < list2?.val) {
    list1 = list1?.next;
  } else {
    list2 = list2?.next;
  }
  let node: ListNode | null = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      node.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  } else if (list2) {
    node.next = list2;
  }

  return head;
}

export default mergeTwoLists;
