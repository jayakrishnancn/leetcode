import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([3, 2, 1, 4])).toEqual(7);
  });
  it("case 2", () => {
    expect(Default([8, 6, 7, 7])).toEqual(4);
  });
  it("case 3", () => {
    expect(Default([1])).toEqual(1);
  });
  it("case 3", () => {
    expect(
      Default([
        12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 3, 10, 9, 8, 7,
      ])
    ).toEqual(68);
  });
});
