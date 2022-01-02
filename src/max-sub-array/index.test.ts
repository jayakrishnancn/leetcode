import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    ).toEqual(6);
  });
  it("case 2", () => {
    expect(Default([1])).toEqual(1);
  });
  it("case 3", () => {
    expect(Default([5, 4, -1, 7, 8])).toEqual(23);
  });
  it("case 4", () => {
    expect(Default([-1])).toEqual(-1);
  });
  it("case 4", () => {
    expect(Default([-2, 1])).toEqual(1);
  });
});
