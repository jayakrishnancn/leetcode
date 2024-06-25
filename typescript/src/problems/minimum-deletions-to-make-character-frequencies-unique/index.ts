function minDeletions(s: string): number {
  let memo: { [key: string]: number } = {},
    max = 0;
  for (let i = 0; i < s.length; i++) {
    memo[s[i]] = memo[s[i]] > 0 ? memo[s[i]] + 1 : 1;
    max = memo[s[i]] > max ? memo[s[i]] : max;
  }

  let values: boolean[] = [],
    minChange = 0;
  // [ 2 2 1]
  Object.values(memo)
    .sort((a, b) => Number(a) - Number(b))
    .forEach((value) => {
      console.log(values[value], value, minChange);
      if (!values[value]) {
        values[value] = true;
        return;
      }
      let val = value;
      while (val > 0) {
        if (!values[val]) {
          values[val] = true;
          break;
        }
        console.log(val, 'val', minChange);
        minChange++;
        val--;
      }
    });

  return minChange;
}

export default minDeletions;
