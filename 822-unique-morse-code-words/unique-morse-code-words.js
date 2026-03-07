/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const set = new Set()
   for (let word of words){
    let transformation = ''
    for(let char of word){
        transformation += morse[char.charCodeAt(0) - 97]

    }
    set.add(transformation)
   }
   return set.size
};
