import Default from '.';
import Tree from '../../utils/tree';

describe('938. Range Sum of BST', () => {
  it('case 1', () => {
    const input = Tree.createFromArray([10, 5, 15, 3, 7, null, 18]);
    const low = 7,
      high = 15;
    const expectedOp = 32;
    expect(Default(input, low, high)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = Tree.createFromArray([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
    const low = 6,
      high = 10;
    const expectedOp = 23;
    expect(Default(input, low, high)).toEqual(expectedOp);
  });

  it('case 3', () => {
    const input = Tree.createFromArray([
      18,
      9,
      27,
      6,
      15,
      24,
      30,
      3,
      null,
      12,
      null,
      21,
    ]);
    const low = 18,
      high = 24;
    const expectedOp = 63;
    expect(Default(input, low, high)).toEqual(expectedOp);
  });
});
