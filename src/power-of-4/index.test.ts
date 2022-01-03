import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(1)).toEqual(true);
  });
  it("case 2", () => {
    expect(Default(5)).toEqual(false);
  });
  it("case 3", () => {
    expect(Default(16)).toEqual(true);
  });
  it("case 4", () => {
    expect(Default(1 / 4)).toEqual(true);
  });
  it("case 4", () => {
    expect(Default(Math.pow(4, -2))).toEqual(true);
  });
  it("case 4", () => {
    expect(Default(Math.pow(4, -3))).toEqual(true);
  });
  it("case 5", () => {
    expect(Default(2)).toEqual(false);
  });
});
