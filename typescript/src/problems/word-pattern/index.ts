function wordPattern(pattern: string, s: string): boolean {
  let sArr = s.split(" ").filter(item => item.length > 0);
  let ptr = 0,
    memo = {};

  if (pattern.length !== sArr.length) return false;

  for (let a of pattern) {
    if (memo[a] === undefined) {
      if (Object.values(memo).includes(sArr[ptr])) {
        return false;
      }
      memo[a] = sArr[ptr];
    } else if (memo[a] !== sArr[ptr]) {
      return false;
    }

    ptr++;
  }

  return true;
}
export default wordPattern;
