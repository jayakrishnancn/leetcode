/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param s
 */
function lengthOfLastWord(s: string): number {
  let arr = s.split(" ").filter(item => item.length > 0);

  return arr.pop()?.length ?? 0;
}

export default lengthOfLastWord;
