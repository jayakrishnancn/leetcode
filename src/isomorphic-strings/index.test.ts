import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("egg", "add")).toEqual(true);
  });
  it("case 2", () => {
    expect(Default("foo", "bar")).toEqual(false);
  });
  it("case 3", () => {
    expect(Default("paper", "title")).toEqual(true);
  });
  it("case 3", () => {
    expect(Default("badc", "baba")).toEqual(false);
  });
});
