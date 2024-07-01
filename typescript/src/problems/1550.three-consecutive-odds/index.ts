// link: https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2024-07-01
function threeConsecutiveOdds(arr: number[]): boolean {
  for (let index = 2; index < arr.length; index++) {
    if (
      arr[index] % 2 === 1 &&
      arr[index - 1] % 2 === 1 &&
      arr[index - 2] % 2 === 1
    ) {
      return true;
    }
  }

  return false;
}

export default threeConsecutiveOdds;
