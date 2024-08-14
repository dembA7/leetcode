/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {

    if (s1 === s2) return true;

    m = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            m.push(i)
        }
    }

    if (m.length !== 2) return false;

    return s1[m[1]] === s2[m[0]] && s1[m[0]] === s2[m[1]];
};

str1 = "qgqeg"
str2 = "gqgeq"

console.log(areAlmostEqual(str1, str2))