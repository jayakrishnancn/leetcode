import Default from ".";

describe("sigma blue", () => {
  it("case 1", () => {
    expect(Default("GGLLGG")).toEqual(true);
  });
  it("case 2", () => {
    expect(Default("GG")).toEqual(false);
  });
  it("case 3", () => {
    expect(Default("GL")).toEqual(true);
  });
  it("case 6", () => {
    expect(Default("GGLLG")).toEqual(true);
  });
});
