function addStrings(num1: string, num2: string): string {
  let maxlen = Math.max(num1.length, num2.length);

  num1 = num1.padStart(maxlen, "0");
  num2 = num2.padStart(maxlen, "0");

  let carry = 0;
  let sum = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    let s = Number(num1[i]) + Number(num2[i]) + carry;
    carry = s > 9 ? 1 : 0;
    sum = (s % 10) + sum;
  }

  if (carry) {
    sum = 1 + sum;
  }

  return sum;
}
export default addStrings;
