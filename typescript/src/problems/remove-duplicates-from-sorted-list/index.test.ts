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
    expect(Default(getLinkList([1, 2, 3]))).toEqual(
      getLinkList([1, 2, 3])
    );
  });
  it("case 2", () => {
    expect(
      Default(getLinkList([1, 1, 1, 2, 2, 3, 3]))
    ).toEqual(getLinkList([1, 2, 3]));
  });
  it("case 3", () => {
    expect(Default(getLinkList([1, 1, 2, 3, 3]))).toEqual(
      getLinkList([1, 2, 3])
    );
  });
  it("case 4", () => {
    expect(Default(getLinkList([1, 2, 3, 3, 3]))).toEqual(
      getLinkList([1, 2, 3])
    );
  });
  it("case 5", () => {
    expect(
      Default(
        getLinkList([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2])
      )
    ).toEqual(getLinkList([1, 2]));
  });
});
