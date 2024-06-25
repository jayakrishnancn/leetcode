const getAllAt = (s, n, i) => {
  let str = '';
  while (i < s.length) {
    str += s[i];
    i += n + (n - 2);
  }
  return str;
};
enum DIRECTION {
  UP = -1,
  DOWN = 1,
}
function convert(s: string, n: number): string {
  if (n > s.length || n === 1) return s;
  let strArr: any[][] = [];
  let i = 0,
    j = 0,
    dir = DIRECTION.DOWN;
  for (let index = 0; index < s.length; index++) {
    if (strArr[i] === undefined) {
      strArr[i] = [];
    }
    strArr[i][j] = s[index];

    if (i === n - 1) {
      dir = DIRECTION.UP;
      j++;
    } else if (i === 0) {
      dir = 1;
    }

    if (dir === DIRECTION.UP) {
      i--;
      j++;
    } else {
      i++;
    }
  }

  const str = strArr.reduce((a, b) => a + b.reduce((c, d) => c + d, ''), '');
  console.log(str);
  return str;
}

export default convert;
