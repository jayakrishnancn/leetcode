import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(5)).toEqual(2);
  });
  it("case 2", () => {
    expect(Default(7)).toEqual(0);
  });
  it("case 3", () => {
    expect(Default(10)).toEqual(5);
  });
});
