function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let b = t[i];

    if (!map[a]) {
      if (Object.values(map).includes(b)) {
        return false;
      }
      map[a] = b;
    }
    if (map[a] !== b) {
      return false;
    }
  }

  return true;
}
export default isIsomorphic;
