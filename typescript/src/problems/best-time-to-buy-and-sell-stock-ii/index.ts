function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let prev = Infinity;
  for (let curr of prices) {
    if (curr > prev) {
      maxProfit += curr - prev;
    }
    prev = curr;
  }

  return maxProfit;
}

export default maxProfit;
