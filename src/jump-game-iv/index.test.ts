import Default from ".";

describe("minJumps", () => {
  it("case 1", () => {
    expect(
      Default([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])
    ).toEqual(3);
  });
  it("case 2", () => {
    expect(Default([7])).toEqual(0);
  });
  it("case 3", () => {
    expect(Default([7, 6, 9, 6, 9, 6, 9, 7])).toEqual(1);
  });
});
