import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([30, 20, 150, 100, 40])).toEqual(3);
  });
  it("case 2", () => {
    expect(Default([60, 60, 60, 60, 60, 60])).toEqual(15);
  });
  it("case 2", () => {
    expect(Default([60, 60, 60])).toEqual(3);
  });
});
