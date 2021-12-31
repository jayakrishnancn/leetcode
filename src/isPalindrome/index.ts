/**
 *
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 */
function isPalindrome(num: number): boolean {
  if (num < 0) return false;
  let rem = 0,
    x = num;
  while (x > 0) {
    rem = rem * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return rem === num;
}

export default isPalindrome;
