const findMax = (
  s: string,
  l: number,
  r: number
): string => {
  while (l >= 0 && r <= s.length - 1) {
    if (s[l] !== s[r]) {
      return s.substring(l + 1, r);
    }
    l--;
    r++;
  }

  return s.substring(l + 1, r);
};

function longestPalindrome(s: string): string {
  let maxSub = s[0];

  for (let i = 0; i < s.length; i++) {
    let max = maxSub;
    if (s[i] === s[i + 2]) {
      max = findMax(s, i, i + 2);
    }
    maxSub = max.length > maxSub.length ? max : maxSub;
    if (s[i] === s[i + 1]) {
      max = findMax(s, i, i + 1);
    }

    maxSub = max.length > maxSub.length ? max : maxSub;
  }

  return maxSub;
}
export default longestPalindrome;
