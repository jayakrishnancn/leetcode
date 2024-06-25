import Default from "./index";

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("case 2 [4,3,2,1]", () => {
    expect(Default([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
  it("case 3 [9]", () => {
    expect(Default([9])).toEqual([1, 0]);
  });
  it("case 3 [0]", () => {
    expect(Default([0])).toEqual([1]);
  });
  it("case 7 [8, 9, 9, 9]", () => {
    expect(Default([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
  });
  it("case 8 [9, 8, 9]", () => {
    expect(Default([9, 8, 9])).toEqual([9, 9, 0]);
  });
  it("case 3 [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]", () => {
    expect(
      Default([
        6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5,
        4, 3,
      ])
    ).toEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4,
      4,
    ]);
  });
});
