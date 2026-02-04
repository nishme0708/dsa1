/*
 * Problem: 121. Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1907975680/
 * Language: javascript
 * Date: 2026-02-04
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0;
    for(let i=1;i<prices.length;i++) {
        let today = prices[i];
        if(today < min) {
            min = today;
        } else {
            max = Math.max(max, today - min)
        }
        
    }
    return max
};
