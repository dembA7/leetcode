/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return [];
      }
    
      let uniqueArray = [];
      let prevNum = nums[0];
      uniqueArray.push(prevNum);
    
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== prevNum) {
          uniqueArray.push(nums[i]);
          prevNum = nums[i];
        }
      }
    
      return uniqueArray;
};

let nums = [1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));