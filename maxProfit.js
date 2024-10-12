/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0;
    let sell = 1
    let max_profit = 0;

    if (prices.length < 2) return 0;

    while (sell < prices.length) {
        if (prices[sell] > prices[buy]) {
            let profit = prices[sell] - prices[buy];
            max_profit = Math.max(max_profit, profit);
        } else {
            buy = sell;
        }
        sell++;
    }

    return max_profit;
}

console.log(maxProfit([7,6,4,3,1]));