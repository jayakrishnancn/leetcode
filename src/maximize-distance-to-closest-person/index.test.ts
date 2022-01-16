import Default from ".";

describe("max Dist To Closest", () => {
  it("case 1", () => {
    expect(Default([1, 0, 0, 0, 1, 0, 1])).toEqual(2);
  });
  it("case 2", () => {
    expect(Default([1, 0, 0, 0])).toEqual(3);
  });

  it("case 3", () => {
    expect(Default([0, 1])).toEqual(1);
  });
  it("case 4", () => {
    expect(
      Default([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0])
    ).toEqual(4);
  });
});
