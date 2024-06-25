import Default from ".";

describe("wordPattern", () => {
  it("case 1", () => {
    expect(Default("abba", "hello Hi Hi hello")).toEqual(
      true
    );
  });
  it("case 2", () => {
    expect(
      Default("abba", "hello hello hello hello")
    ).toEqual(false);
  });
});
