import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([7, 6, 4, 3, 1])).toEqual(0);
  });
  it("case 2", () => {
    expect(Default([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
});
