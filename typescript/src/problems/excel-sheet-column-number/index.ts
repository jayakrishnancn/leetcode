const charCode = (c) => c.charCodeAt(0) - 64;
function titleToNumber(columnTitle: string): number {
  return columnTitle
    .split('')
    .reverse()
    .reduce((prev: number, curr: string, i) => {
      return prev + charCode(curr) * Math.pow(26, i);
    }, 0);
}
export default titleToNumber;
