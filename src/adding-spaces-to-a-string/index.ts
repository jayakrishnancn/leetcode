function addSpaces(s: string, spaces: number[]): string {
  let res = "",
    j = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j]) {
      res += " ";
      j++;
    }
    res += s[i];
  }
  return res;
}

export default addSpaces;
