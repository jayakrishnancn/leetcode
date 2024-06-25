let alreadyTravelled = {};
function isH(n: number): boolean {
  if (n === 1) return true;

  if (alreadyTravelled[n] > 0) {
    return false;
  }

  let sumOfTheSquares = n
    .toString()
    .split('')
    .reduce((prev, curr) => {
      return prev + Math.pow(Number(curr), 2);
    }, 0);

  if (sumOfTheSquares === 1) {
    return true;
  }
  alreadyTravelled[n] = sumOfTheSquares;
  return isH(sumOfTheSquares);
}
function isHappy(n: number): boolean {
  alreadyTravelled = {};
  return isH(n);
}
export default isHappy;
