// link: https://leetcode.com/problems/maximum-height-of-a-triangle/
let memo = {};
function go(a: number, b: number, c: number): number {
  if (memo[`${a}-${b}-${c}`] > 0) {
    return memo[`${a}-${b}-${c}`];
  }
  if (a >= c) {
    return go(b, a - c, c + 1);
  }
  memo[`${a}-${b}-${c}`] = c;
  return memo[`${a}-${b}-${c}`];
}

function maxHeightOfTriangle(red: number, blue: number): number {
  return Math.max(go(red, blue, 1), go(blue, red, 1)) - 1;
}

export default maxHeightOfTriangle;
