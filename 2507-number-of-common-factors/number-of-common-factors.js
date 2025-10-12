/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let n = Math.max(a,b);
    let i = 1 ;
    let result = [];
    while(n>=i){
        if(a%i=== 0 && b%i === 0){
            result.push(i)
        }i++;
    }return result.length
};