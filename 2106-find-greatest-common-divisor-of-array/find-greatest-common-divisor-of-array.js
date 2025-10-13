/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let result = [];
    let i = 1;
    while(max>=i){
        if(max % i === 0 && min % i === 0){
            result.push(i)
        }i++
    }return result[result.length-1]
};