//https://leetcode.com/problems/sqrtx/submissions/
function mySqrt(x: number): number {
  let root = 0;
  while (root * root <= x) {
    root += 1;
  }
  return root - 1;
}

export default mySqrt;
