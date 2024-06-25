import Default from '.';

describe('Daily', () => {
  it('case 1', () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    const expectedOp = [0, 1];
    expect(Default(input, target)).toEqual(expect.arrayContaining(expectedOp));
  });

  it('case 2', () => {
    const input = [3, 2, 4];
    const target = 6;
    const expectedOp = [1, 2];
    expect(Default(input, target)).toEqual(expect.arrayContaining(expectedOp));
  });

  it('case 3', () => {
    const input = [3, 3];
    const target = 6;
    const expectedOp = [0, 1];
    expect(Default(input, target)).toEqual(expect.arrayContaining(expectedOp));
  });
});
