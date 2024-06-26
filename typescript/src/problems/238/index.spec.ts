import Default from '.';

describe('238. Product of Array Except Self', () => {
  it('case 1', () => {
    const input = [1, 2, 3, 4];
    const expectedOp = [24, 12, 8, 6];
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [-1, 1, 0, -3, 3];
    const expectedOp = [0, 0, 9, 0, 0];
    expect(Default(input)).toEqual(expectedOp);
  });
});
