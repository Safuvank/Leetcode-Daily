/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let word = s.split(" ");
    let result = word.slice(0,k);
    return result.join(" ");
};