import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([3, 1, 5, 8])).toEqual(167);
  });
  it("case 2", () => {
    expect(Default([1, 5])).toEqual(10);
  });
  it("case 3", () => {
    expect(Default([3, 1, 5, 8])).toEqual(1081);
  });
  it("case 4", () => {
    expect(Default([0, 0, 0, 0])).toEqual(0);
  });
  it("case 5", () => {
    expect(Default([0, 0, 100, 0, 0])).toEqual(100);
  });
  it("case 6", () => {
    expect(Default([99])).toEqual(99);
  });
  it("case 7", () => {
    expect(Default([50, 50])).toEqual(2550);
  });
  it("case 8", () => {
    expect(Default([50, 49])).toEqual(2500);
  });
});
