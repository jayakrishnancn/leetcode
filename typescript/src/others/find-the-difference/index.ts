function findTheDifference(s: string, t: string): string {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum -= s[i].charCodeAt(0);
    sum += t[i].charCodeAt(0);
  }
  sum += t[t.length - 1].charCodeAt(0);
  return String.fromCharCode(sum);
}

export default findTheDifference;
