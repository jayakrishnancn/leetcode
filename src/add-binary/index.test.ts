import Default from "./index";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("11", "1")).toEqual("100");
  });
  it("case 2", () => {
    expect(Default("1010", "1011")).toEqual("10101");
  });
  it("case 3", () => {
    expect(Default("111", "1")).toEqual("1000");
  });
  it("case 3", () => {
    expect(Default("1", "1111")).toEqual("10000");
  });
});
