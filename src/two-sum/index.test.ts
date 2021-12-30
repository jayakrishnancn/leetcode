import Default from './index';

describe('two-sum', () => {
  it('case 1', () => {
    expect(Default([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('case 2', () => {
    expect(Default([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
