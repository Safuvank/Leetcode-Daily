/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a - b);
    let min = prices[0] + prices[1]

    if(min <= money){
        return money - min
    }return money
};