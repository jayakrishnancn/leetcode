import Default from "./index";
describe("find Square root (trunced) ", () => {
  it("case 1 perfect roots", () => {
    expect(Default(4)).toEqual(2);
    expect(Default(9)).toEqual(3);
    const random = Math.floor(Math.random() * 1000);
    expect(Default(random * random)).toEqual(random);
  });

  it("case 1 real number", () => {
    expect(Default(8)).toEqual(2);
    expect(Default(15)).toEqual(3);
    expect(Default(99)).toEqual(9);
  });
});
