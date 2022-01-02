function thousandSeparator(n: number): string {
  if (n === 0) return "0";
  let str = "" + n;
  let res = "";
  let LB = 0,
    UB = str.length - 1;
  for (let i = UB; i >= LB; i--) {
    const element = str[i];
    let seperator =
      (UB - i + 1) % 3 === 0 && !(LB === i) ? "." : "";
    res = seperator + element + res;
  }

  return res;
}
export default thousandSeparator;
