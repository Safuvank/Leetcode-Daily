/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let unique = 0;
   for(let num of nums){
    unique = unique ^ num
   }
   return unique
};