/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */
function twoSum(nums: number[], target: number): number[] {
  let trackedNums: { [a: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const opp = target - nums[i],
      num = nums[i];
    if (trackedNums[num] >= 0) {
      return [trackedNums[num], i];
    }
    trackedNums[opp] = i;
  }
  return [];
}

export default twoSum;
