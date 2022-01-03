import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default(2, [[1, 2]])).toEqual(2);
  });
  it("case 2", () => {
    expect(
      Default(3, [
        [1, 3],
        [2, 3],
      ])
    ).toEqual(3);
  });
  it("case 3", () => {
    expect(
      Default(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toEqual(-1);
  });
});
