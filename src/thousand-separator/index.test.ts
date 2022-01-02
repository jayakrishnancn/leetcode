import Default from ".";

describe("thousand-separator", () => {
  it("case 1", () => {
    expect(Default(987)).toEqual("987");
  });
  it("case 2", () => {
    expect(Default(1234)).toEqual("1.234");
  });
  it("case 3", () => {
    expect(Default(0)).toEqual("0");
  });
  it("case 4", () => {
    expect(Default(1234567890)).toEqual("1.234.567.890");
  });
});
