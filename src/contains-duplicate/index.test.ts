import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([1, 2, 3, 3, 4, 5, 6])).toEqual(true);
  });
  it("case 1", () => {
    expect(Default([1, 2, 3, 4, 5, 6])).toEqual(false);
  });
  it("case 1", () => {
    expect(Default([])).toEqual(false);
  });
});
