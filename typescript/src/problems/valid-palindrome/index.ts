const isAlphaNum = (char: string) => char.match(/[a-zA-Z0-9]/g);

function isPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;

  while (left <= right) {
    let a = s[left].toLowerCase(),
      b = s[right].toLowerCase();
    if (!isAlphaNum(a)) {
      left++;
      continue;
    }
    if (!isAlphaNum(b)) {
      right--;
      continue;
    }
    if (a !== b) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
export default isPalindrome;
