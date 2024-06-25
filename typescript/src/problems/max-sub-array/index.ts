function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    prevMax = prevMax + num > num ? prevMax + num : num;

    if (prevMax > max) {
      max = prevMax;
    }
  }
  return max;
}
export default maxSubArray;
