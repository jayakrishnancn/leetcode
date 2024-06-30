import Default from '.';

describe('3200. Maximum Height of a Triangle', () => {
  it('case 1', () => {
    const red = 2,
      blue = 4;
    const expectedOp = 3;
    expect(Default(red, blue)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const red = 2,
      blue = 1;
    const expectedOp = 2;
    expect(Default(red, blue)).toEqual(expectedOp);
  });

  it('case 3', () => {
    const red = 1,
      blue = 1;
    const expectedOp = 1;
    expect(Default(red, blue)).toEqual(expectedOp);
  });

  it('case 4', () => {
    const red = 10,
      blue = 1;
    const expectedOp = 2;
    expect(Default(red, blue)).toEqual(expectedOp);
  });
});
