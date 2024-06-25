import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(1, 22)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22,
    ]);
  });
  it("case 2", () => {
    expect(Default(47, 85)).toEqual([48, 55, 66, 77]);
  });
});
