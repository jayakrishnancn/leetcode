function isPowerOfFour(n: number): boolean {
  let x = n
    .toString(2)
    .padStart(32, "0")
    .split("")
    .reverse()
    .filter((item, index) => item === "1");
  return (
    n > 0 &&
    x.length === 1 &&
    !x.find((item, index) => index % 2 !== 1)
  );
}
export default isPowerOfFour;
