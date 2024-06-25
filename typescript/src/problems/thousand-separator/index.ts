function thousandSeparator(n: number): string {
  return n
    .toString()
    .split('')
    .reduce((prev: string, curr: string, index, arr) => {
      let sperator = (arr.length - index) % 3 === 0 && index !== 0 ? '.' : '';
      return prev + sperator + curr;
    }, '');
}
export default thousandSeparator;
