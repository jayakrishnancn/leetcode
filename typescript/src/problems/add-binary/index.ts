/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param s
 */
function addBinary(a1: string, b1: string): string {
  const maxLength = a1.length > b1.length ? a1.length : b1.length;
  b1 = b1.padStart(maxLength, '0');
  a1 = a1.padStart(maxLength, '0');
  let carry = 0,
    res = [];
  // 11 , 1111
  for (let i = maxLength - 1; i >= 0; i--) {
    let a = a1[i] === '1' ? 1 : 0;
    let b = b1[i] === '1' ? 1 : 0;
    const sum = a + b + carry;
    res[i] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry) {
    res.unshift(1);
  }
  return res.join('');
}

export default addBinary;
