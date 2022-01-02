const singleNumber = (nums: number[]) =>
  nums.reduce((agg, curr) => agg ^ curr, 0);

export default singleNumber;
