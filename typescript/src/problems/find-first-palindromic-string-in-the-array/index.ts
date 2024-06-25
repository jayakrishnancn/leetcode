const isPalendrome = (a) => a.split('').reverse().join('') === a;

function firstPalindrome(words: string[]): string {
  for (let i of words) {
    if (isPalendrome(i)) {
      return i;
    }
  }
  return '';
}
export default firstPalindrome;
