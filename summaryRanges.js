/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {

    let arr = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        
        // Detecta el inicio de una secuencia
        if (i === 0 || (nums[i - 1] + 1) !== nums[i] ){
            start = nums[i];
            console.log('start: ' + start)
        }

        // Detecta el final de una secuencia
        if (i === nums.length || (nums[i + 1] - 1) !== nums[i]) {
            if (start !== nums[i]) {
                arr.push(start.toString() + '->' + nums[i]);
            } else {
                arr.push(start.toString())
             }
        }

    }

    return arr;

}

param = [0,1,2,4,5,7]
console.log(summaryRanges(param))
