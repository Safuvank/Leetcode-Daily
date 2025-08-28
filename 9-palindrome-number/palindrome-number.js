/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let change = x.toString();
    let add = change.split("").reverse().join("");
    return change === add;
    
};