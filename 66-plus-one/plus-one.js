/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let merge = digits.join("");
    let num = BigInt(merge);
    let add = num + 1n;
    return add.toString().split("").map(Number)
};