const isSelf = num => {
  if (num <= 0) return false;
  let n = num;
  while (n > 0) {
    let rem = n % 10;
    if (num % rem !== 0) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
};

function selfDividingNumbers(
  left: number,
  right: number
): number[] {
  let arr: number[] = [];
  while (left <= right) {
    if (isSelf(left)) {
      arr.push(left);
    }
    left++;
  }
  return arr;
}

export default selfDividingNumbers;
