import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(3, 2, 3, 5)).toEqual(4);
  });
  it("case 2", () => {
    expect(Default(4, 2, 3, 4)).toEqual(6);
  });
  it("case 3", () => {
    expect(Default(5, 2, 11, 13)).toEqual(10);
  });
});
