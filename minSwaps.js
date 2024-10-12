/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let balance = 0;
    let maxImbalance = 0;

    for (let char of s) {
        if (char === '[') {
            balance++;
        } else {
            balance--;
        }

        maxImbalance = Math.min(maxImbalance, balance);
    }

    return Math.ceil(Math.abs(maxImbalance) / 2);
};


console.log(minSwaps("[]"));