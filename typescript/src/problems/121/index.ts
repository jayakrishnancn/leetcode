// link :https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);

    maxProfit = Math.max(price - minPrice, maxProfit);
  }

  return maxProfit;
}
export default maxProfit;
