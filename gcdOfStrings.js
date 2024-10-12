/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const mcd = gcd(str1.length, str2.length);
    const result = str1.substring(0, mcd);

    return result;

};

let str1 = 'ABABAB';
let str2 = 'ABAB';

console.log(gcdOfStrings(str1, str2));