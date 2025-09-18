/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let replaced = s.replace(/\s+/g, " ").trim();
    let words = replaced.split(" ");
    let lastWord = words.at(-1);
    return lastWord.length;
};