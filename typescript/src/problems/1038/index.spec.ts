import Default from ".";
import tree from '../../utils/tree'

describe("1038. Binary Search Tree to Greater Sum Tree", () => {
  it("case 1", () => {
    const input = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
    const inputRoot = tree.createFromArray(input);
    const expectedOp = [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8]
    expect(tree.treeToArray(Default(inputRoot))).toEqual(expectedOp)
  });

  it("case 2", () => {
    const input = [0, null, 1]
    const inputRoot = tree.createFromArray(input);
    const expectedOp = [1, null, 1]
    expect(tree.treeToArray(Default(inputRoot))).toEqual(expectedOp)
  });

});
