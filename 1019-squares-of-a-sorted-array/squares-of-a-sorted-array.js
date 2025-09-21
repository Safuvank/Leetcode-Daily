/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squred = nums.map(num=>num*num)
    let sort = squred.sort((a,b)=>a-b);
    return sort
};