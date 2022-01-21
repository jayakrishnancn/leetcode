import Default from ".";

describe("longest-substring-without-repeating-characters", () => {
  it("case 1", () => {
    expect(Default("abcabcbb")).toEqual(3);
  });
  it("case 2", () => {
    expect(Default("bbbbb")).toEqual(1);
  });
  it("case 3", () => {
    expect(Default("pwwkew")).toEqual(3);
  });
  it("case 4", () => {
    expect(Default("abcdaxyzdjklmn")).toEqual(10);
  });
  it("case 5", () => {
    expect(Default("abba")).toEqual(2);
  });
});
