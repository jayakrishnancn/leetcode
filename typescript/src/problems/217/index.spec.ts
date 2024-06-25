import Default from '.';

describe('217. Contains Duplicate', () => {
  it('case 1', () => {
    const input = [1, 2, 3, 1];
    const expectedOp = true;
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [1, 2, 3, 4];
    const expectedOp = false;
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 3', () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const expectedOp = true;
    expect(Default(input)).toEqual(expectedOp);
  });
});
