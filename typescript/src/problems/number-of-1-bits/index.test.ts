import Default from ".";

describe("number-of-1-bits", () => {
  it("case 1", () => {
    //00000000000000000000000010000000
    expect(Default(128)).toEqual(1);
  });
  it("case 2", () => {
    // unsigned -3  11111111111111111111111111111101
    expect(Default(-3 >>> 0)).toEqual(31);
  });
  it("case 3", () => {
    // 00000000000000000000000000001011
    expect(Default(11)).toEqual(3);
  });
});
