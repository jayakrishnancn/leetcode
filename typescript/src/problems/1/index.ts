// link : https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] | null {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    if (map[Math.abs(target - nums[index])] >= 0) {
      return [index, map[Math.abs(target - nums[index])]];
    }
    map[nums[index]] = index;
  }

  return null;
}
export default twoSum;
