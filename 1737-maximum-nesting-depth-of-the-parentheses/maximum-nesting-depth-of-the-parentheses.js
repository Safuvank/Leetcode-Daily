/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let result = 0;
    let current = 0;
    for (let c of s) {
        if (c === "(") {
            current++
            result = Math.max(result, current)
        } else if (c === ")") {
            current--;
        }
    }
    return result;
};