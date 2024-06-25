import Default from ".";

describe("lengthOfLIS", () => {
  it("case 1", () => {
    expect(Default([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(
      4
    );
  });
  it("case 2", () => {
    expect(Default([0, 1, 0, 3, 2, 3])).toEqual(4);
  });
  it("case 3", () => {
    expect(Default([7, 7, 7, 7, 7, 7, 7])).toEqual(1);
  });
});
