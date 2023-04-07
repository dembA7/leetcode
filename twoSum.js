// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function(nums, target) {

    const d={};

    for (let i =0; i < nums.length; i++){
        const another = target - nums[i];

        if (another in d) {
            return [d[another], i];
        }

        d[nums[i]] = i;
    }
    return null;
};

twoSum(nums, target);