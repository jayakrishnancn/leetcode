import Default from '.';

describe('Daily', () => {
  it('case 1', () => {
    const input = [7, 1, 5, 3, 6, 4];
    const expectedOp = 5;
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [7, 6, 4, 3, 1];
    const expectedOp = 0;
    expect(Default(input)).toEqual(expectedOp);
  });
});
