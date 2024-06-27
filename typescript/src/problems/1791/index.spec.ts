import Default from '.';
// import tree from '../../utils/tree';

describe('Daily', () => {
  it('case 1', () => {
    const input = [
      [1, 2],
      [2, 3],
      [4, 2],
    ];
    const expectedOp = 2;
    expect(Default(input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [
      [1, 2],
      [5, 1],
      [1, 3],
      [1, 4],
    ];
    const expectedOp = 1;
    expect(Default(input)).toEqual(expectedOp);
  });
});
