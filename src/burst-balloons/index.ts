function maxCoins(nums: number[]): number {
  let sum = 0;
  let pointer = 0;
  let mul: number[] = [];
  while (nums[pointer]) {
    let a = nums[pointer - 1] ?? 1;
    let b = nums[pointer];
    let c = nums[pointer + 1] ?? 1;

    mul.push(a * b * c);
    pointer++;
  }
  return 2;
}

export default maxCoins;
