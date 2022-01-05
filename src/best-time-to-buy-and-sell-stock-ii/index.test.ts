import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([7, 1, 5, 3, 6, 4])).toEqual(7);
  });
  it("case 2", () => {
    expect(
      Default([0, 50, 150, 0, 0, 1, 1, 0, 15, 15, 16])
    ).toEqual(167);
  });
  it("case 3", () => {
    expect(Default([7, 6, 4, 3, 1])).toEqual(0);
  });
  it("case 4", () => {
    expect(Default([7, 6, 5, 4, 3, 2])).toEqual(0);
  });
  it("case 5", () => {
    expect(Default([700, 6, 5, 4, 3, 200])).toEqual(197);
  });
  it("case 6", () => {
    expect(Default([700, 1, 5, 3, 6, 400])).toEqual(401);
  });
});
