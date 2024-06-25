/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param s
 */
function plusOne(digits: number[]): number[] {
  let carry = 1;
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    const element = digits[i];
    digits[i] = (element + carry) % 10;
    if (element + carry > 9) {
      carry = 1;
    } else {
      carry = 0;
      break;
    }
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
}

export default plusOne;
