import Default from ".";

describe("two-sum", () => {
  it("case 1", () => {
    expect(
      Default("LeetcodeHelpsMeLearn", [8, 13, 15])
    ).toEqual("Leetcode Helps Me Learn");
  });
  it("case 2", () => {
    expect(Default("icodeinpython", [1, 5, 7, 9])).toEqual(
      "i code in py thon"
    );
  });
});
