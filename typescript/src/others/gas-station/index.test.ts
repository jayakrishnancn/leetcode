import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
    ).toEqual(3);
  });
  it("case 2", () => {
    expect(Default([2, 3, 4], [3, 4, 3])).toEqual(-1);
  });
  it("case 3", () => {
    expect(
      Default([4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9])
    ).toEqual(-1);
  });
  it("case 4", () => {
    expect(
      Default([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])
    ).toEqual(4);
  });
  it("case 5", () => {
    expect(Default([3, 1, 1], [1, 2, 2])).toEqual(0);
  });
});
