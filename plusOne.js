/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length - 1;
  
    for (let i = n; i >= 0; i--) {
      digits[i]++;
      
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        return digits;
      }
    }

    digits.unshift(1);
    
    return digits;
};

let digits = [9, 9, 9];
console.log(plusOne(digits));