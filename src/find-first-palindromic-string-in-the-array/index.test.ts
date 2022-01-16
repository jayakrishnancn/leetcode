import Default from ".";

describe("firstPalindrome", () => {
  it("case 1", () => {
    expect(
      Default(["abc", "car", "ada", "racecar", "cool"])
    ).toEqual("ada");
  });
  it("case 2", () => {
    expect(Default(["notapalindrome", "racecar"])).toEqual(
      "racecar"
    );
  });
  it("case 3", () => {
    expect(Default(["def", "ghi"])).toEqual("");
  });
});
