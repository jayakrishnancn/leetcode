// link: https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  let left = [1, nums[0]],
    right = [] as number[];
  for (let i = 2; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const res = [] as number[];
  for (let index = 0; index < nums.length; index++) {
    res[index] = left[index] * right[index] || 0;
  }

  return res;
}

export default productExceptSelf;
