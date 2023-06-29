/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
          return i;
        }
      }
    
      return -1;
};

const haystack = "sadbutsad";
const needle = "sad";
const index = strStr(haystack, needle);
console.log(index);