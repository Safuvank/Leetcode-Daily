/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sett = new Set(nums);
     if(sett.size === nums.length){
        return false
    }else{
        return true
    }
};