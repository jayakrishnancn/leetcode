function lengthOfLongestSubstring(s: string): number {
  let max = 0,
    lookup = new Map<string, number>();
  let start = 0;
  lookup.set(s[0], 0);

  for (let index = 1; index < s.length; index++) {
    let char = s[index];
    max = Math.max(max, index - start);
    let charIndexInLookup = lookup.get(char) ?? -1;
    if (charIndexInLookup >= start) {
      start = lookup.get(char)! + 1;
    }
    lookup.set(char, index);
  }

  return Math.max(max, s.length - start);
}
export default lengthOfLongestSubstring;
