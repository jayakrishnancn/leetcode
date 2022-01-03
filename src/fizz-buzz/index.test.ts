import Default from ".";

describe("fizz-buzz", () => {
  it("case 1", () => {
    expect(Default(3)).toEqual(["1", "2", "Fizz"]);
  });
  it("case 2", () => {
    expect(Default(5)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
    ]);
  });
});
