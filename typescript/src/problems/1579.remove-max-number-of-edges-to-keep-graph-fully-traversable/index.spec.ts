import Default from '.';

describe('1579. Remove Max Number of Edges to Keep Graph Fully Traversable', () => {
  it('case 1', () => {
    const input = [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 3],
      [1, 2, 4],
      [1, 1, 2],
      [2, 3, 4],
    ];
    const expectedOp = 2;
    expect(Default(4, input)).toEqual(expectedOp);
  });

  it('case 2', () => {
    const input = [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 4],
      [2, 1, 4],
    ];
    const expectedOp = 0;
    expect(Default(4, input)).toEqual(expectedOp);
  });

  it('case 3', () => {
    const input = [
      [3, 2, 3],
      [1, 1, 2],
      [2, 3, 4],
    ];
    const expectedOp = -1;
    expect(Default(4, input)).toEqual(expectedOp);
  });
});
