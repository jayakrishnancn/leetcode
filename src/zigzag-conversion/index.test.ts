import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("PAYPALISHIRING", 3)).toEqual(
      "PAHNAPLSIIGYIR"
    );
  });
  it("case 2", () => {
    expect(Default("PAYPALISHIRING", 4)).toEqual(
      "PINALSIGYAHRPI"
    );
  });
  it("case 3", () => {
    expect(Default("A", 1)).toEqual("A");
  });
});
