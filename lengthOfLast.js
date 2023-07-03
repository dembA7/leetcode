/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    s = s.trim();
    
    let length = 0;
    let i = s.length - 1;
    
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
      
};

let s = "Hello World ThisIsAWord"
console.log(lengthOfLastWord(s));