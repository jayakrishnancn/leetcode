import Default from "./index";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("III")).toEqual(3);
  });
  it("case 2", () => {
    expect(Default("LVIII")).toEqual(58);
  });
});
