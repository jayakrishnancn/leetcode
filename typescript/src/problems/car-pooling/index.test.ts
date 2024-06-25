import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default(
        [
          [2, 1, 5],
          [3, 3, 7],
        ],
        4
      )
    ).toEqual(false);
  });
  it("case 2", () => {
    expect(
      Default(
        [
          [2, 1, 5],
          [3, 3, 7],
        ],
        5
      )
    ).toEqual(true);
  });
  it("case 3", () => {
    expect(
      Default(
        [
          [2, 1, 5],
          [3, 3, 7],
          [1, 6, 7],
        ],
        5
      )
    ).toEqual(true);
  });
  it("case 4", () => {
    expect(
      Default(
        [
          [5, 1, 5],
          [5, 5, 7],
        ],
        5
      )
    ).toEqual(true);
  });
});
