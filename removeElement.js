
// @param {number[]} nums
// @param {number} val
// @return {number}


const nums = [3, 2, 2, 3];
const val = 3;

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[k++] = nums[i];
        }
    }
    return k;
};

const k = removeElement(nums, val);