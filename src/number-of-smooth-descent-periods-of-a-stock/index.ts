const fact = n => {
  return (n * (n + 1)) / 2;
};
function getDescentPeriods(prices: number[]): number {
  let prev: number = prices[0] + 1,
    res = 0,
    count = 0;
  prices[prices.length] = prices[prices.length - 1] + 10;

  for (let i = 0; i < prices.length; i++) {
    let c = prices[i];
    if (prev - c === 1) {
      count++;
    } else {
      res += fact(count);
      count = 1;
    }
    prev = c;
  }
  return res;
}
export default getDescentPeriods;
