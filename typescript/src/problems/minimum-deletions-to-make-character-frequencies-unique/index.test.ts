import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("ceabaacb")).toEqual(2);
  });
  it("case 2", () => {
    expect(Default("aaabbbcc")).toEqual(2);
  });
  it("case 3", () => {
    expect(Default("aab")).toEqual(0);
  });
  it("case 4", () => {
    expect(Default("ab")).toEqual(1);
  });
  it("case 5", () => {
    expect(Default("a")).toEqual(0);
  });
  it("case 6", () => {
    expect(Default("aabbcccddddeee")).toEqual(4);
  });
  it("case 7", () => {
    expect(Default("aabbccddeeff")).toEqual(9);
  });
});
