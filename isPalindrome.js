/**
 * @param {number} x
 * @return {boolean}
 */
 
var isPalindrome = function(x) {
    let str = x.toString();
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};

const x = 123321;

console.log(isPalindrome(x));