import Default from '.';

describe('1550. Three Consecutive Odds', () => {
  it('case 1', () => {
    const input = [2, 6, 4, 1];
    const expectedOp = false;
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [1, 2, 34, 3, 4, 5, 7, 23, 12];
    const expectedOp = true;
    expect(Default(input)).toEqual(expectedOp);
  });
});
