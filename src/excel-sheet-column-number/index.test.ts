import Default from ".";

describe("excel-sheet-column-number", () => {
  it("case 1", () => {
    expect(Default("A")).toEqual(1);
  });
  it("case 2", () => {
    expect(Default("AB")).toEqual(28);
  });
  it("case 3", () => {
    expect(Default("ZY")).toEqual(701);
  });
});
