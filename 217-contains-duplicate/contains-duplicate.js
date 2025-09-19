/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sett = new Set(nums);
    return sett.size !== nums.length;
};