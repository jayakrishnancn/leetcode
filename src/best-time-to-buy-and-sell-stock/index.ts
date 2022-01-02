function maxProfit(prices: number[]): number {
  let min = Infinity,
    minArr: number[] = [];
  for (let price of prices) {
    if (price < min) {
      min = price;
      minArr.push(min);
    }
  }
  let minMax = 0;
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i] - minArr[i - 1] > minMax) {
      minMax = prices[i] - minArr[i - 1];
    }
  }

  console.log(minArr);
  return 0;
}
export default maxProfit;
