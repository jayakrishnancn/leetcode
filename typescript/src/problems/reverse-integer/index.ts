function reverse(x: number): number {
  const POW = Math.pow(2, 31);
  let p = parseFloat(x.toString().split('').reverse().join(''));
  if (p < -POW || p > POW - 1) {
    return 0;
  }

  return p * Math.sign(x);
}
export default reverse;
