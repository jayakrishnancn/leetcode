function canConstruct(
  ransomNote: string,
  magazine: string
): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let visited: { [i: string]: number } = {};
  for (let i = 0; i < magazine.length; i++) {
    const a = ransomNote[i];
    const b = magazine[i];
    if (a) {
      visited[a] =
        visited[a] !== undefined ? visited[a] - 1 : 0;
    }
    visited[b] =
      visited[a] !== undefined ? visited[b] + 1 : 1;
  }
  return !Object.keys(visited).find(
    item => visited[item] <= 0
  );
}
export default canConstruct;
