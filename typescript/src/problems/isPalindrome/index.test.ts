import Default from './index';

describe('two-sum', () => {
  it('case 1', () => {
    expect(Default(121)).toEqual(true);
  });
  it('case 2', () => {
    expect(Default(-121)).toEqual(false);
  });
});
