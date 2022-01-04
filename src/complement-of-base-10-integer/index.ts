function bitwiseComplement(n: number): number {
  let sum = 0;
  while (n > 0) {
    sum = n << 1;
    n = Math.floor(n / 10);
  }
  return sum;
}
export default bitwiseComplement;
