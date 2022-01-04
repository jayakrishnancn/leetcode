import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(123)).toEqual(321);
  });
  it("case 2", () => {
    expect(Default(-123)).toEqual(-321);
  });
  it("case 3", () => {
    expect(Default(120)).toEqual(21);
  });
  it("case 4", () => {
    expect(Default(1534236469)).toEqual(0);
  });
});
