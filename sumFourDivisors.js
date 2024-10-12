/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {

        let divisors = [];
        let floored = Math.floor(Math.sqrt(nums[i]));

        for (let j = 1; j <= floored; j++){

            if (nums[i] % j === 0) {
                divisors.push(j);
                divisors.push(Math.floor(nums[i] / j));
            }

            if (divisors.length === 4) {
                for (let k = 0; k < divisors.length; k++){
                    sum += divisors[k];
                }
            }
        }
    }

    return sum;
};

let nums = [21, 4, 7];
console.log(sumFourDivisors(nums));