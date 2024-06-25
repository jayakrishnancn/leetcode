import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(19)).toEqual(true);
  });
  it("case 2", () => {
    expect(Default(2)).toEqual(false);
  });
  it("case 3", () => {
    expect(Default(7)).toEqual(true);
  });
  it("case 4", () => {
    expect(Default(23)).toEqual(true);
  });
  it("case 5", () => {
    expect(Default(19)).toEqual(true);
  });
});
