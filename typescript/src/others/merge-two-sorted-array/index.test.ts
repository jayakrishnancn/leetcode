import Default, { ListNode } from "./index";

const getLinkList = (arr: number[]) => {
  let head = new ListNode(arr[0]);
  let node = head;
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    node.next = new ListNode(element);
    node = node.next;
  }

  return head;
};

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default(
        getLinkList([1, 2, 4]),
        getLinkList([1, 3, 4, 6, 7, 8])
      )
    ).toEqual(getLinkList([1, 1, 2, 3, 4, 4, 6, 7, 8]));
  });
  it("case 2", () => {
    expect(
      Default(getLinkList([]), getLinkList([]))
    ).toEqual(getLinkList([]));
  });
  it("case 2", () => {
    expect(
      Default(getLinkList([0]), getLinkList([0, 1]))
    ).toEqual(getLinkList([0, 0, 1]));
  });
});
