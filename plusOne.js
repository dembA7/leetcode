/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
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

let digits = [1, 2, 3];
console.log(plusOne(digits));