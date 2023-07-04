/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digitA = i >= 0 ? parseInt(a[i]) : 0;
      const digitB = j >= 0 ? parseInt(b[j]) : 0;
  
      const sum = digitA + digitB + carry;
  
      carry = Math.floor(sum / 2);
      const digit = sum % 2;
  
      result = digit + result;
  
      i--;
      j--;
    }
  
    return result;

};

const a1 = "11";
const b1 = "1";
const sum1 = addBinary(a1, b1);
console.log(sum1);