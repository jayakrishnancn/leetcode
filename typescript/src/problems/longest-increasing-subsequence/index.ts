function lengthOfLIS(nums: number[]): number {
  let dp: number[] = [],
    currentLength = 0;
  for (let index = 1; index < nums.length; index++) {
    let num = nums[index];
    let prev = nums[index - 1];

    if (num < prev) {
      dp[index] = num;
    }
    currentLength++;
  }

  return 0;
}

export default lengthOfLIS;
