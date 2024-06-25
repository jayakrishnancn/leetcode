import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default("9333852702227987", "85731737104263")
    ).toEqual("9419584439332250");
  });
  it("case 2", () => {
    expect(Default("1", "2")).toEqual("3");
  });
  it("case 3", () => {
    expect(Default("10000", "2")).toEqual("10002");
  });
});
