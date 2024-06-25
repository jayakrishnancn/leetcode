import Default from ".";
/*
"1807","7810" "1A3B"
"11","10" "1A0B"
"10","11" "1A0B"
"10111","11000" "1A2B"
"10000","10111" "2A0B"
"00000","10111" "1A0B"
"00000" ,"00000" "5A0B"
"00000" ,"11111" "0A0B"
*/

describe("two-sum", () => {
  it("case 1", () => {
    expect(Default("1807", "7810")).toEqual("1A3B");
  });
  it("case 2", () => {
    expect(Default("11", "10")).toEqual("1A0B");
  });
  it("case 3", () => {
    expect(Default("10", "11")).toEqual("1A0B");
  });
  it("case 4", () => {
    expect(Default("10111", "11000")).toEqual("1A2B");
  });
  it("case 5", () => {
    expect(Default("10000", "10111")).toEqual("2A0B");
  });
  it("case 6", () => {
    expect(Default("00000", "10111")).toEqual("1A0B");
  });
  it("case 7", () => {
    expect(Default("00000", "00000")).toEqual("5A0B");
  });
  it("case 8", () => {
    expect(Default("00000", "11111")).toEqual("0A0B");
  });
});
