import Default from '.';
import tree from '../../utils/tree';

describe('1382. Balance a Binary Search Tree', () => {
  it('case 1', () => {
    const input = tree.createFromArray([1, null, 2, null, 3, null, 4]);
    const expectedOp = [2, 1, 4];
    expect(tree.treeToArray(Default(input))).toEqual(expectedOp);
  });
});
