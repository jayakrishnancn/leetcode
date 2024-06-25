import Default, { ListNode } from ".";

const getList = arr => {
  let head, prev;
  arr.forEach(val => {
    let node = new ListNode(val);
    if (!head) {
      head = node;
      prev = node;
    } else if (prev) {
      prev.next = node;
      prev = prev.next;
    }
  });

  return head;
};

describe("two-sum", () => {
  it("case 1", () => {
    let a1 = getList([2, 4, 3]);
    let a2 = getList([5, 6, 4]);
    let a3 = getList([7, 0, 8]);
    expect(Default(a1, a2)).toEqual(a3);
  });
  it("case 2", () => {
    let a1 = getList([1]);
    let a2 = getList([9]);
    let a3 = getList([0, 1]);
    expect(Default(a1, a2)).toEqual(a3);
  });
});
