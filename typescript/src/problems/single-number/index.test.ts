import Default from "./index";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([2, 2, 1])).toEqual(1);
  });
  it("case 2", () => {
    expect(Default([4, 1, 2, 1, 2])).toEqual(4);
  });
  it("case 3", () => {
    expect(Default([1])).toEqual(1);
  });
  it("case 4", () => {
    expect(Default([-1, -1, -2])).toEqual(-2);
  });
});
