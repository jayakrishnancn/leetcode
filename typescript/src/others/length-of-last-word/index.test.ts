import Default from "./index";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("Hello World")).toEqual(5);
  });
  it("case 2", () => {
    expect(Default("   fly me   to   the moon  ")).toEqual(
      4
    );
  });
  it("case 3", () => {
    expect(Default("")).toEqual(0);
  });
  it("case 4", () => {
    expect(Default("Today is a nice day")).toEqual(3);
  });
  it("case 5", () => {
    expect(Default("a")).toEqual(1);
  });
});
