function nthUglyNumber(n: number, a: number, b: number, c: number): number {
  let nthNumber = a;
  let count = n;
  let i = a < b ? a : b;
  i = i < c ? i : c;
  while (count > 0) {
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      count--;
    }
    i++;
  }

  return i - 1;
}
export default nthUglyNumber;
