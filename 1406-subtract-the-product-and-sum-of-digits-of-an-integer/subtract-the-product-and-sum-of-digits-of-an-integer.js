/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let digits = n.toString().split("").map(Number).reduce((acc, curr) => acc * curr, 1)
    let sum = n.toString().split("").map(Number).reduce((acc, curr) => acc + curr, 0)
    return digits - sum
};