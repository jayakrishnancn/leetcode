import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default("A man, a plan, a canal: Panama ")
    ).toEqual(true);
  });
  it("case 1", () => {
    expect(Default("race a car")).toEqual(false);
  });
});
