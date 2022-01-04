import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("aa", "aab")).toEqual(true);
  });
  it("case 2", () => {
    expect(Default("aa", "ab")).toEqual(false);
  });
  it("case 3", () => {
    expect(Default("a", "b")).toEqual(false);
  });
  it("case 4", () => {
    expect(Default("abab", "ab")).toEqual(false);
  });
  it("case 5", () => {
    expect(Default("abcd", "dcab")).toEqual(true);
  });
});
